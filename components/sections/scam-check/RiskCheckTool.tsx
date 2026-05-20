"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { MiraiMascot } from "@/components/brand/MiraiMascot";
import { LINE_BOT_URL } from "@/lib/constants";
import { trackEvent } from "@/lib/analytics";
import {
  getRiskLevel,
  riskResults,
  scamRiskCheckCopy,
  scamRiskQuestions,
  type RiskAnswer,
} from "@/lib/scam-risk-check";

const answerScore: Record<RiskAnswer, number> = {
  yes: 1,
  unknown: 0.5,
  no: 0,
};

export function RiskCheckTool() {
  const [answers, setAnswers] = useState<Record<string, RiskAnswer>>({});

  const answeredCount = Object.keys(answers).length;
  const score = useMemo(
    () =>
      scamRiskQuestions.reduce((total, question) => {
        const answer = answers[question.id];
        return total + (answer == null ? 0 : answerScore[answer] * question.weight);
      }, 0),
    [answers],
  );
  const riskLevel = getRiskLevel(score);
  const result = riskResults[riskLevel];
  const isComplete = answeredCount === scamRiskQuestions.length;

  function setAnswer(questionId: string, answer: RiskAnswer) {
    setAnswers((current) => ({ ...current, [questionId]: answer }));
    trackEvent("risk_answer", { questionId, answer });
  }

  function reset() {
    setAnswers({});
    trackEvent("risk_reset");
  }

  useEffect(() => {
    if (!isComplete) return;
    trackEvent("risk_result", { riskLevel, score });
  }, [isComplete, riskLevel, score]);

  return (
    <section className="border-y border-border bg-white/80 py-8 sm:py-12 md:py-14" aria-labelledby="risk-check-tool-heading">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-start">
          <div className="min-w-0 rounded-3xl border border-border bg-card p-4 shadow-[0_18px_45px_rgba(11,31,58,0.08)] sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              <span className="lang-ja">{scamRiskCheckCopy.kicker.ja}</span>
              <span lang="vi" className="lang-vi">{scamRiskCheckCopy.kicker.vi}</span>
              <span lang="en" className="lang-en">{scamRiskCheckCopy.kicker.en}</span>
            </p>
            <h2 id="risk-check-tool-heading" className="mt-2 text-[1.35rem] font-bold leading-tight text-navy sm:text-3xl">
              <span className="lang-ja">{scamRiskCheckCopy.heading.ja}</span>
              <span lang="vi" className="lang-vi">{scamRiskCheckCopy.heading.vi}</span>
              <span lang="en" className="lang-en">{scamRiskCheckCopy.heading.en}</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              <span className="lang-ja">{scamRiskCheckCopy.lead.ja}</span>
              <span lang="vi" className="lang-vi">{scamRiskCheckCopy.lead.vi}</span>
              <span lang="en" className="lang-en">{scamRiskCheckCopy.lead.en}</span>
            </p>

            <div className="mt-5 space-y-3 sm:mt-6 sm:space-y-4">
              {scamRiskQuestions.map((question, index) => (
                <fieldset key={question.id} className="rounded-2xl border border-border bg-white/75 p-3.5 sm:p-4">
                  <legend className="text-sm font-bold leading-snug text-navy">
                    <span className="mr-2 text-accent">Q{index + 1}</span>
                    <span className="lang-ja">{question.text.ja}</span>
                    <span lang="vi" className="lang-vi">{question.text.vi}</span>
                    <span lang="en" className="lang-en">{question.text.en}</span>
                  </legend>
                  <p className="mt-2 text-xs leading-relaxed text-muted">
                    <span className="lang-ja">{question.help.ja}</span>
                    <span lang="vi" className="lang-vi">{question.help.vi}</span>
                    <span lang="en" className="lang-en">{question.help.en}</span>
                  </p>
                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    {(["yes", "unknown", "no"] as const).map((answer) => {
                      const active = answers[question.id] === answer;
                      return (
                        <button
                          key={answer}
                          type="button"
                          onClick={() => setAnswer(question.id, answer)}
                          className={`min-h-11 rounded-xl border px-3 py-2 text-sm font-bold transition-colors ${
                            active
                              ? "border-navy bg-navy text-white"
                              : "border-border bg-card text-navy hover:bg-accent-muted/50"
                          }`}
                        >
                          <span className="lang-ja">{scamRiskCheckCopy.answerLabels[answer].ja}</span>
                          <span lang="vi" className="lang-vi">{scamRiskCheckCopy.answerLabels[answer].vi}</span>
                          <span lang="en" className="lang-en">{scamRiskCheckCopy.answerLabels[answer].en}</span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-border bg-[linear-gradient(160deg,#ffffff,#eefcf9)] p-5 shadow-[0_18px_45px_rgba(11,31,58,0.08)] sm:p-6 lg:sticky lg:top-24">
            <div className="mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full bg-white ring-4 ring-accent-muted">
              <MiraiMascot compact variant={riskLevel === "high" ? "surprised" : riskLevel === "medium" ? "think" : "calm"} className="h-36 w-36" />
            </div>
            <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-accent">
              {answeredCount}/{scamRiskQuestions.length} answered
            </p>
            <div className="mt-3 rounded-2xl bg-navy p-4 text-white">
              <p className="text-sm font-bold">
                <span className="lang-ja">{result.label.ja}</span>
                <span lang="vi" className="lang-vi">{result.label.vi}</span>
                <span lang="en" className="lang-en">{result.label.en}</span>
              </p>
              <p className="mt-2 text-base font-bold leading-snug">
                <span className="lang-ja">{result.title.ja}</span>
                <span lang="vi" className="lang-vi">{result.title.vi}</span>
                <span lang="en" className="lang-en">{result.title.en}</span>
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-200">
                <span className="lang-ja">{result.advice.ja}</span>
                <span lang="vi" className="lang-vi">{result.advice.vi}</span>
                <span lang="en" className="lang-en">{result.advice.en}</span>
              </p>
            </div>

            {!isComplete ? (
              <p className="mt-3 text-xs leading-relaxed text-muted">
                <span className="lang-ja">すべて答えると、より近い危険度になります。</span>
                <span lang="vi" className="lang-vi">Trả lời hết để kết quả gần tình huống hơn.</span>
                <span lang="en" className="lang-en">Answer all questions for a closer risk estimate.</span>
              </p>
            ) : null}

            <div className="mt-4 grid gap-2">
              <a
                href={LINE_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("line_click", { source: "risk_check_tool", riskLevel })}
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-accent px-4 py-2 text-center text-sm font-bold text-white hover:bg-accent-hover"
              >
                <span className="lang-ja">LINEで相談導線へ</span>
                <span lang="vi" className="lang-vi">Đi đến LINE check</span>
                <span lang="en" className="lang-en">Go to LINE check</span>
              </a>
              <Link
                href="/official-info"
                onClick={() => trackEvent("official_info_click", { source: "risk_check_tool", riskLevel })}
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-navy bg-white px-4 py-2 text-center text-sm font-bold text-navy hover:bg-navy hover:text-white"
              >
                <span className="lang-ja">公式情報を確認</span>
                <span lang="vi" className="lang-vi">Xem nguồn chính thức</span>
                <span lang="en" className="lang-en">Check official sources</span>
              </Link>
              <button
                type="button"
                onClick={reset}
                className="inline-flex min-h-10 items-center justify-center rounded-xl px-4 py-2 text-sm font-bold text-navy underline-offset-4 hover:underline"
              >
                <span className="lang-ja">回答をリセット</span>
                <span lang="vi" className="lang-vi">Làm lại</span>
                <span lang="en" className="lang-en">Reset answers</span>
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
