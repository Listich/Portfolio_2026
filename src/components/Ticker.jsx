const TEXT =
  'SERENA LISTICH ✦ EPITECH TOULOUSE ✦ SWIFT STUDENT CHALLENGE 2026 ✦ C++ · REACT NATIVE · PYTHON ✦ TOULOUSE, FRANCE ✦ 無限の可能性     '

export default function Ticker() {
  return (
    <div
      className="w-full overflow-hidden py-1"
      style={{ background: 'rgba(194,81,122,0.06)' }}
    >
      <div className="ticker-track flex whitespace-nowrap">
        {/* duplicate so the loop is seamless */}
        <span className="ticker-text">{TEXT}</span>
        <span className="ticker-text">{TEXT}</span>
        <span className="ticker-text">{TEXT}</span>
      </div>
    </div>
  )
}
