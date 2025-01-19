/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import getAbout from "@/service/about/useAbout";
import { updateAbouteData } from "@/utils/About";
import { toast } from "sonner";

export default function DashboardAbout() {
  const [AboutData, refetch, ,] = getAbout();

  const [IsSaveChangesBtnShow, setIsSaveChangesBtnShow] = useState(false);

  // State for personal info
  const [personalInfo, setPersonalInfo]: any = useState({});

  // State for stats
  const [stats, setStats]: any = useState({});

  // State for skills
  const [skills, setSkills]: any = useState([]);

  console.log(AboutData);

  useEffect(() => {
    setPersonalInfo(AboutData?.personalInfo);
    setStats(AboutData?.stats);
    setSkills(AboutData?.skills);
  }, [AboutData]);

  // Handlers
  const handlePersonalInfoChange = (key: number, value: string) => {
    setIsSaveChangesBtnShow(true);
    setPersonalInfo({ ...personalInfo, [key]: value });
  };

  const handleStatsChange = (key: number, value: string) => {
    setIsSaveChangesBtnShow(true);
    setStats({ ...stats, [key]: value });
  };

  const addSkill = () => {
    setSkills([...skills, { name: "", icon: "" }]);
  };

  const updateSkill = (index: number, key: string, value: string) => {
    setIsSaveChangesBtnShow(true);
    const updatedSkills: any = [...skills];
    updatedSkills[index][key] = value;
    setSkills(updatedSkills);
  };

  const removeSkill = (index: any) => {
    setIsSaveChangesBtnShow(true);
    setSkills(skills.filter((_: any, i: any) => i !== index));
  };

  const handleSaveChanges = async () => {
    const updateData = {
      personalInfo: personalInfo,
      stats: stats,
      skills: skills,
    };

    try {
      const response: any = await updateAbouteData(updateData, AboutData._id);
      console.log("Update Response:", response);

      if (response.success) {
        refetch();
        toast.success("About Info Updated!", { position: "top-right" });
      } else {
        toast.error("Update failed!", { position: "top-right" });
      }
    } catch (error: any) {
      console.error("Error saving changes:", error.message);
      toast.error("Something went wrong while updating!", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard - About Page</h2>

      {/* Personal Info Section */}
      <div className="border border-gray-300 rounded-lg p-6 mb-6">
        <p className="text-lg font-semibold mb-4">Personal Info</p>
        {personalInfo &&
          Object.keys(personalInfo)?.map((key: any, index) => (
            <div key={index} className="mb-4">
              <Input
                fullWidth
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                value={personalInfo[key]}
                onChange={(e) => handlePersonalInfoChange(key, e.target.value)}
              />
            </div>
          ))}
      </div>

      {/* Stats Section */}
      <div className="border border-gray-300 rounded-lg p-6 mb-6">
        <p className="text-lg font-semibold mb-4">Stats</p>
        {stats &&
          Object.keys(stats)?.map((key: any, index: number) => (
            <div key={index} className="mb-4">
              <Input
                fullWidth
                label={`${key.charAt(0).toUpperCase() + key.slice(1)} (e.g., ${
                  key === "experience"
                    ? "2+"
                    : key === "projects"
                    ? "25+"
                    : "2+"
                })`}
                value={stats[key]}
                onChange={(e) => handleStatsChange(key, e.target.value)}
              />
            </div>
          ))}
      </div>

      {/* Skills Section */}
      <div className="border border-gray-300 rounded-lg p-6">
        <p className="text-lg font-semibold mb-4">Skills</p>
        {skills?.map((skill: any, index: number) => (
          <div key={index} className="mb-4 flex items-center gap-4">
            <Input
              fullWidth
              label="Skill Name"
              value={skill.name}
              onChange={(e) => updateSkill(index, "name", e.target.value)}
            />
            <Input
              fullWidth
              label="Icon URL"
              value={skill.icon}
              onChange={(e) => updateSkill(index, "icon", e.target.value)}
            />
            <Button
              color="danger"
              onPress={() => removeSkill(index)}
              className="ml-2"
            >
              Remove
            </Button>
          </div>
        ))}
        <Button onPress={addSkill} className="mt-4 bg-blue-500 text-white">
          Add Skill
        </Button>
      </div>

      <Button
        disabled={!IsSaveChangesBtnShow}
        className="mt-4"
        fullWidth
        onClick={handleSaveChanges}
        color="primary"
        variant="shadow"
      >
        Save Changes
      </Button>
    </div>
  );
}
