import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SessionSidebar = () => {
  const [sessions, setSessions] =
    useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/sessions"
      );

      const data = await res.json();

      setSessions(data);
    } catch (error) {
      console.log(error);
    }
  };

  const openSession = (session) => {
    navigate("/dashboard", {
      state: {
        repoData: {
          ...session.repoData,
          sessionId: session._id,
        },
      },
    });
  };

  return (
    <div className="border border-white/5 bg-black">
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-5">
        <p className="mono text-xs uppercase tracking-[0.22em] text-zinc-600">
          RECENT SESSIONS
        </p>
      </div>

      {/* Sessions */}
      <div className="max-h-[500px] overflow-y-auto p-4">
        <div className="space-y-2">
          {sessions.map((session) => (
            <button
              key={session._id}
              onClick={() =>
                openSession(session)
              }
              className="w-full border border-transparent bg-[#080808] px-5 py-4 text-left transition hover:border-white/5"
            >
              <p className="truncate text-sm text-white">
                {session.repoName}
              </p>

              <p className="mono mt-2 truncate text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                {session.repoUrl}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SessionSidebar;