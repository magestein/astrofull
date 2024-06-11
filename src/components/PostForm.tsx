import { actions } from "astro:actions";
import { useForm } from "react-hook-form";
import type {FormType } from "../types/post";

export const PostForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormType>();
 
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
    <form onSubmit={handleSubmit(handleCreatePost)}>
      <label htmlFor="title">Title:</label>
      <input {...register("title", { required: "Title is required" })}
      />
      {errors.title && <div>{errors.title.message}</div>}
      <br />
      <label htmlFor="content">Content:</label>
      <textarea {...register("content", { required: "Content is required" })}
      />
      {errors.content && <div>{errors.content.message}</div>}
      <br />
      <label htmlFor="slug">Slug:</label>
      <input {...register("slug")} />
      {errors.slug && <div>{errors.slug.message}</div>}
      <br />
      <label htmlFor="isPublished">isPublished:</label>
      <input  type="checkbox" {...register("isPublished")}
      />
      <br />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creando..." : "Crear cliente"}
      </button>
    </form>
  );
}
