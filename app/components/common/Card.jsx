export function Card({ children, className }) {
    return (
      <div className={`bg-zinc-800 border border-zinc-700 rounded-lg shadow-md ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className }) {
    return <div className={`p-6 ${className}`}>{children}</div>;
  }
  