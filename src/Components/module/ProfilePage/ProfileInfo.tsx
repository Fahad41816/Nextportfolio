/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Input, Textarea, Avatar, Button } from "@nextui-org/react";
import getProfile from "@/service/Profile/getProfile";
import { updateProfileData } from "@/utils/profile";
import { toast } from "sonner";

export default function DashboardHome() {
  const [ProfileData, refetch]: any = getProfile();

  const [IsSaveBtnShow, setIsSaveBthShow] = useState(false);
  const [profileImage, setProfileImage] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [aboutText, setAboutText] = useState("");

  useEffect(() => {
    setProfileImage(ProfileData?.image);
    setTitle(ProfileData?.name);
    setSubtitle(ProfileData?.title);
    setAboutText(ProfileData?.about);
  }, [ProfileData]);

  const handleImageChange = (e: any) => {
    setIsSaveBthShow(true);
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setProfileImage(imageURL);
    }
  };

  const handleProfileUpdate = async () => {
    const updateprofileData = {
      name: title,
      image: profileImage,
      title: subtitle,
      about: aboutText,
    };

    const data = await updateProfileData(updateprofileData, ProfileData._id);

    console.log(data);
    if (data.success) {
      toast.success("Profile Info Updated!", { position: "top-right" });
      refetch();
    } else {
      toast.error("Something Wrong!", { position: "top-right" });
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      {/* Profile Section */}
      <div className="border border-gray-300 rounded-lg p-6 mb-6">
        <p className="text-lg font-semibold mb-4">Profile</p>
        <div className="flex items-center gap-4 mb-6">
          <Avatar src={profileImage} alt="Profile" size="lg" />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="upload"
            className="hidden"
          />
          <label
            htmlFor="upload"
            className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-600"
          >
            Upload Image
          </label>
        </div>
        <Input
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setIsSaveBthShow(true);
          }}
          className="mb-4"
        />
        <Input
          fullWidth
          label="Subtitle"
          value={subtitle}
          onChange={(e) => {
            setSubtitle(e.target.value);
            setIsSaveBthShow(true);
          }}
        />
      </div>

      {/* About Section */}
      <div className="border border-gray-300 rounded-lg p-6 mb-6">
        <p className="text-lg font-semibold mb-4">About</p>
        <Textarea
          fullWidth
          label="About Me"
          value={aboutText}
          onChange={(e) => {
            setAboutText(e.target.value);
            setIsSaveBthShow(true);
          }}
          rows={4}
        />
      </div>

      {/* button  */}
      <Button
        onClick={handleProfileUpdate}
        disabled={!IsSaveBtnShow}
        color="primary"
      >
        Save Changes
      </Button>
    </div>
  );
}
