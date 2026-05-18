const ReadmePreview = () => {
  return (
    <div className="rounded-3xl border border-[#21262d] bg-[#161b22]/60 p-8">
      <h2 className="mb-6 text-3xl font-bold">
        Generated README
      </h2>

      <div className="prose prose-invert max-w-none">
        <h1>Modern React Dashboard</h1>

        <p>
          A scalable React dashboard application using Vite,
          Tailwind CSS, and component-based architecture.
        </p>

        <h2>Features</h2>

        <ul>
          <li>Responsive UI</li>
          <li>Reusable components</li>
          <li>Framer Motion animations</li>
          <li>Modern project structure</li>
        </ul>

        <h2>Installation</h2>

        <pre>
          <code>
            npm install{"\n"}
            npm run dev
          </code>
        </pre>
      </div>
    </div>
  );
};

export default ReadmePreview;