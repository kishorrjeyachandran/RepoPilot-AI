const ExportReportButton = ({
  repoData,
}) => {
  const handleExport = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/report/generate",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            repoData,
          }),
        }
      );

      const blob =
        await res.blob();

      const url =
        window.URL.createObjectURL(
          blob
        );

      const a =
        document.createElement("a");

      a.href = url;

      a.download = `${repoData.name}-report.pdf`;

      document.body.appendChild(a);

      a.click();

      a.remove();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={handleExport}
      className="mono w-full border border-[#f5d90a]/20 bg-[#f5d90a]/5 px-5 py-4 text-xs uppercase tracking-[0.18em] text-[#f5d90a] transition hover:bg-[#f5d90a] hover:text-black"
    >
      Export AI Report
    </button>
  );
};

export default ExportReportButton;