export default function SectionHeader({ chapter, title, titleEm, jp }) {
  return (
    <header className="mb-10">
      {/* Chapter label + rose rule */}
      <div className="flex items-center gap-3 mb-3">
        <span
          className="text-[10px] font-bold tracking-[0.25em]"
          style={{ color: '#c2517a' }}
        >
          {chapter}
        </span>
        <span
          className="flex-1 h-px"
          style={{ background: 'rgba(194,81,122,0.35)' }}
        />
      </div>

      {/* Main title */}
      <h2
        className="text-5xl font-semibold leading-tight"
        style={{ fontFamily: '"Cormorant Garamond", serif', color: '#1a0a10' }}
      >
        {title}{' '}
        {titleEm && (
          <em style={{ color: '#c2517a', fontStyle: 'italic' }}>{titleEm}</em>
        )}
      </h2>

      {/* Japanese subtitle */}
      {jp && (
        <p
          className="mt-2 text-[11px] tracking-widest"
          style={{ color: '#7a4a5e', fontFamily: '"Noto Serif JP", serif' }}
        >
          {jp}
        </p>
      )}
    </header>
  )
}
