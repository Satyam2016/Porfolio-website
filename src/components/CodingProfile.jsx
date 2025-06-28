import React, { useState, useEffect } from "react";

const tabs = ["Profile", "Badges", "Stats", "Contests", "Projects"];
import './index.css'

const CodingProfile = () => {
  const [profileData, setProfileData] = useState(null);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const projects = [
    {
      name: "Lost & Found System",
      description: "A real-time system for reporting and managing lost and found items.",
      link: "https://github.com/yourusername/lost-found",
    },
    {
      name: "Real-time Code Collaborator",
      description: "Live code sharing and editing using WebSocket and React.",
      link: "https://github.com/yourusername/code-collab",
    },
    {
      name: "LeetCode Visualizer",
      description: "Visualize your LeetCode stats with charts and filters.",
      link: "https://github.com/yourusername/leetcode-visualizer",
    },
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://alfa-leetcode-api.onrender.com/userProfile/satyam_kumar_79`);
        if (!res.ok) throw new Error("Failed to fetch profile");
        const data = await res.json();
        setProfileData(data);
      } catch (err) {
        setError(err.message);
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) return <p className="text-white">Loading profile...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!profileData) return null;

  const { profile, badges, stat, contest } = profileData;

  const renderProfile = () => (
    <div className="space-y-3">
      <img src={profile.profile.avatar} alt={profile.profile.realName || "User"} className="w-24 h-24 rounded-full mx-auto" />
      <h3 className="text-center text-2xl font-bold text-white">{profile.profile.realName || "satyam_kumar_79"}</h3>
      <p className="text-center text-gray-300">@{profile.profile.userSlug}</p>
      <p className="text-center text-gray-400 italic">{profile.profile.school || ""}</p>
      <p className="text-center text-gray-300 max-w-md mx-auto mt-2">{profile.profile.aboutMe || "No bio available."}</p>
    </div>
  );

  const renderBadges = () => (
    <div className="grid grid-cols-3 gap-4">
      {badges.map((badge) => (
        <div key={badge.id} className="bg-white/10 rounded-lg p-4 text-center text-white">
          <img src={badge.icon} alt={badge.name} className="mx-auto w-12 h-12 mb-2" />
          <p className="font-semibold">{badge.name}</p>
          <p className="text-sm text-gray-300">{badge.description}</p>
        </div>
      ))}
    </div>
  );

  const renderStats = () => {
    const totalSolved = stat.matchedUser.submitStats.acSubmissionNum.reduce((acc, cur) => acc + cur.count, 0);

    return (
      <div className="text-white space-y-4 max-w-md mx-auto">
        <p className="text-xl font-semibold">Total Solved: {totalSolved}</p>
        <div className="grid grid-cols-3 gap-4 text-center">
          {stat.matchedUser.submitStats.acSubmissionNum.map(({ difficulty, count }) => (
            <div key={difficulty} className="bg-white/10 rounded p-4">
              <p className="capitalize font-semibold">{difficulty}</p>
              <p className="text-lg">{count}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <p className="font-semibold">Ranking:</p>
          <p>Global: {stat.matchedUser.profile.ranking || "N/A"}</p>
          <p>Contest Rating: {stat.matchedUser.userContestRanking?.rating || "N/A"}</p>
        </div>
      </div>
    );
  };

  const renderContests = () => (
    <div className="text-white max-w-md mx-auto space-y-4">
      <p>Total Contests Participated: {contest.userContestRankingHistory.length || 0}</p>
      <p>Highest Rating: {contest.userContestRankingHistory.reduce((max, entry) => Math.max(max, entry.rating), 0)}</p>
      <p>Current Rating: {contest.userContestRanking?.rating || "N/A"}</p>
    </div>
  );

  const renderProjects = () => (
    <div className="grid gap-4">
      {projects.map((project, i) => (
        <div key={i} className="bg-white/10 p-4 rounded-xl text-white shadow-md hover:scale-[1.02] transition">
          <h4 className="text-xl font-semibold">{project.name}</h4>
          <p className="text-sm text-gray-300">{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-2 text-blue-300 underline hover:text-blue-100">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 rounded-xl p-6 shadow-lg text-white font-sans">
      {/* Tabs */}
      <div className="flex space-x-4 mb-6 border-b border-white/30">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 font-semibold text-lg ${
              activeTab === tab ? "border-b-4 border-white text-white" : "text-white/70 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Profile" && renderProfile()}
        {activeTab === "Badges" && renderBadges()}
        {activeTab === "Stats" && renderStats()}
        {activeTab === "Contests" && renderContests()}
        {activeTab === "Projects" && renderProjects()}
      </div>
    </div>
  );
};

export default CodingProfile;
