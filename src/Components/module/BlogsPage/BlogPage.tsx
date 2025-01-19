/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";

import RichTextEditor from "@/Components/RichTextEditor";
import Image from "next/image";
import getBlogs from "@/service/Blog/Blogs";
import { addblogData, deleteblogData, updateblogData } from "@/utils/Blog";
import { toast } from "sonner";

interface Blog {
  id: number;
  title: string;
  image: string;
  content: string;
}

const BlogDashboard = () => {
  // fetch data
  const [BlogsData, refetch, isLoading, isError] = getBlogs();

  const [editingBlog, setEditingBlog]: any = useState<Blog | null>(null); // Editing blog can be a Blog or null
  const [blogTitle, setBlogTitle] = useState<string>(""); // Type as string
  const [blogImage, setBlogImage] = useState<string>(""); // Type as string
  const [BlogDescription, setBlogDescription] = useState<string>(""); // Type as string
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpenModal = (blog: Blog | null = null) => {
    setEditingBlog(blog);
    setBlogTitle(blog ? blog.title : "");
    setBlogImage(blog ? blog.image : ""); // Set image URL
    setBlogDescription(blog ? blog.content : "");
    onOpen();
  };

  const handleCloseModal = () => {
    setEditingBlog(null);
    setBlogTitle("");
    setBlogImage(""); // Reset image URL
    setBlogDescription("");
    onClose();
  };

  const handleAddOrUpdateBlog = async () => {
    if (editingBlog) {
      // updated data

      console.log(editingBlog);

      const updateData = {
        title: blogTitle,
        image: blogImage, // Update image URL
        content: BlogDescription,
      };

      const responce = await updateblogData(updateData, editingBlog._id);

      if (responce.success) {
        refetch();
        toast.success("Blog updated successfully!", { position: "top-right" });
      } else {
        toast.error("Something Wrong!", { position: "top-right" });
      }
    } else {
      const blogData = {
        title: blogTitle,
        image: blogImage, // Update image URL
        content: BlogDescription,
      };

      const responce = await addblogData(blogData);
      if (responce.acknowledged) {
        refetch();
        toast.success("Blog updated successfully!", { position: "top-right" });
      } else {
        toast.error("Something Wrong!", { position: "top-right" });
      }
    }
    handleCloseModal();
  };

  const handleDeleteBlog = async (id: number) => {
    const responce = await deleteblogData(id);

    if (responce.success) {
      refetch();
      toast.error("Blog deleted successfully!", { position: "top-right" });
    } else {
      toast.error("Something Wrong!", { position: "top-right" });
    }
  };

  const truncateHTML = (html: string, limit: number): string => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html; // Parse the HTML content into the DOM
    const text = tempDiv.textContent || tempDiv.innerText || ""; // Get plain text content
    return text.length > limit ? `${text.substring(0, limit)}...` : text; // Truncate and append "..."
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
      <h1 className="text-2xl font-bold text-black dark:text-white">
        Blog Dashboard
      </h1>
      <Button className="my-4" onPress={onOpen}>
        Add Blog
      </Button>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {BlogsData?.map((blog: any) => (
          <div
            key={blog._id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between"
          >
            {/* Image */}
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 truncate">
              {blog.title}
            </h2>

            {/* Content */}
            <div
              className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: truncateHTML(blog.content, 150), // Call truncateHTML to limit the preview
              }}
            ></div>

            {/* Action Buttons */}
            <div className="flex justify-between mt-4">
              <Button
                size="sm"
                color="primary"
                onClick={() => handleOpenModal(blog)}
                className="px-4 py-2"
              >
                Edit
              </Button>
              <Button
                size="sm"
                color="danger"
                onClick={() => handleDeleteBlog(blog._id)}
                className="px-4 py-2"
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Add/Edit Blog */}
      <Modal isOpen={isOpen} size="4xl" onClose={handleCloseModal}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                {editingBlog ? "Edit Blog" : "Add Blog"}
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Blog Title"
                  placeholder="Enter blog title"
                  value={blogTitle}
                  onChange={(e) => setBlogTitle(e.target.value)}
                  fullWidth
                />
                <Input
                  label="Blog Image URL"
                  placeholder="Enter blog image URL"
                  value={blogImage} // Bind image URL
                  onChange={(e) => setBlogImage(e.target.value)} // Update image URL
                  fullWidth
                  className="mt-4"
                />
                <RichTextEditor
                  setBlogDescription={setBlogDescription}
                  initialContent={BlogDescription}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={handleCloseModal}
                >
                  Close
                </Button>
                <Button color="primary" onPress={handleAddOrUpdateBlog}>
                  {editingBlog ? "Update Blog" : "Add Blog"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default BlogDashboard;
