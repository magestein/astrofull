import { actions } from "astro:actions";
import { useForm } from "react-hook-form";
import type { FormType } from "../types/post";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Fragment } from "react";

export const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>();

  const handleCreatePost = async (data: FormType) => {
    //console.log(data);
    try {
      //const { data: responseData, error } = await actions.create.safe({title: data.title, content: data.content, slug: data.slug || "", isPublished: data.isPublished});
      const { data: responseData, error } = await actions.create.safe(data);
      if (responseData) {
        alert(responseData);
      }
      if (error) {
        console.log(error.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <h1 className="text-2xl font-bold mb-4">Create Post</h1>
      <form
        onSubmit={handleSubmit(handleCreatePost)}
        className="w-2/3 space-y-6"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">
            Title:
          </label>
          <Input
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded mt-1"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <div>{errors.title.message}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="content">Content:</label>
          <Textarea
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded mt-1"
            {...register("content", { required: "Content is required" })}
          />
          {errors.content && <div>{errors.content.message}</div>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="slug">
            Slug:
          </label>
          <Input
            className="w-full p-2 bg-gray-800 border border-gray-700 rounded mt-1"
            {...register("slug")}
          />
          {errors.slug && <div>{errors.slug.message}</div>}
        </div>
        <div className="mb-4 flex items-center">
          <Input
            className="form-checkbox w-4 h-4 text-purple-600 bg-gray-800 border-gray-700 rounded focus:ring-purple-500"
            type="checkbox"
            {...register("isPublished")}
          />
          <label
            className="pr-10 block text-sm font-medium"
            htmlFor="isPublished"
          >
            is Published:
          </label>
        </div>
        <Button
          className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creando..." : "Create"}
        </Button>
      </form>
    </Fragment>
  );
};
