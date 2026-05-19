export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-card focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-navy focus:shadow-lg focus:ring-2 focus:ring-accent"
    >
      <span className="lang-ja">メインコンテンツへスキップ</span>
      <span lang="vi" className="lang-vi">Bỏ qua đến nội dung chính</span>
    </a>
  );
}
