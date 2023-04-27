import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Form, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Button from "../../components/button/Button";
import { Dropdown } from "../../components/dropdown";
import Field from "../../components/field/Field";
import ImageUpload from "../../components/image/ImageUpload";
import Input from "../../components/input/Input";
import Label from "../../components/label/Label";
import { postAction } from "../../redux/post.slice";
import {
    categoryAllSelector,
    imageSelector,
    userTokenSelector,
} from "../../selector/selector";
import DashboardHeading from "../dashboard/DashboardHeading";

const PostEdit = () => {
    const { postId } = useParams();
    const {
        handleSubmit,
        control,
        watch,
        setValue,
        getValues,
        formState: { isValid },
        reset,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            categoryId: "",
            title: "",
            image: "",
        },
    });
    const [selectCategory, setSeclectCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const watchImage = watch("image").split("\\").pop();
    const cateogries = useSelector(categoryAllSelector);
    const image = useSelector(imageSelector);
    const tokenUser = useSelector(userTokenSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postAction.getCategoryAll());
    }, [dispatch]);

    const handleEditPost = (values) => {
        setLoading(true);
        try {
            const clonevalues = { ...values };
            const value = clonevalues;
            dispatch(
                postAction.updateDraftById({
                    id: postId,
                    value,
                    image,
                    token: tokenUser.token.token,
                }),
            );
            toast.success("Edit post successfully");
            reset({
                title: "",
                content: "",
                image: "",
                categoryId: "",
            });
            setSeclectCategory({});
        } catch (error) {
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    const handleUploadImage = (e) => {
        dispatch(postAction.uploadImage(e));
    };

    const handleSelectCategory = (category) => {
        setValue("categoryId", category.id);
        setSeclectCategory(category);
    };
    return (
        <>
            <>
                <DashboardHeading title="Edit post" desc="Edit post" />
                <Form
                    className="flex flex-col items-baseline"
                    onSubmit={handleSubmit(handleEditPost)}
                >
                    <div className="form-layout">
                        <Field className="w-[400px]">
                            <Label>Title</Label>
                            <Input
                                type="text"
                                placeholder="Enter your title"
                                name="title"
                                control={control}
                                required
                            />
                        </Field>
                        <Field className="w-[400px]">
                            <Label>Content</Label>
                            <Input
                                type="text"
                                placeholder="Enter your content here"
                                name="content"
                                control={control}
                            />
                        </Field>
                    </div>
                    <div className="form-layout">
                        <Field className="w-[400px]">
                            <Label>Category</Label>
                            <Dropdown>
                                <Dropdown.Select placeholder="Select the category" />
                                <Dropdown.List>
                                    {cateogries.length > 0 &&
                                        cateogries.map((category, index) => (
                                            <Dropdown.Option
                                                key={category.id}
                                                onClick={() =>
                                                    handleSelectCategory(
                                                        category,
                                                    )
                                                }
                                            >
                                                {category.name}
                                            </Dropdown.Option>
                                        ))}
                                </Dropdown.List>
                                {selectCategory.name && (
                                    <span className="inline-block p-4 mt-5 text-pink-700 rounded-lg bg-pink-50">
                                        {selectCategory.name}
                                    </span>
                                )}
                            </Dropdown>
                        </Field>
                        <Field className="w-[400px]">
                            <Label>Image</Label>
                            <ImageUpload
                                type="file"
                                name="image"
                                image={watchImage}
                                className="h-[250px]"
                                control={control}
                                onChange={handleUploadImage}
                            />
                        </Field>
                    </div>

                    <Button
                        type="submit"
                        isLoading={loading}
                        disabled={loading}
                        className="mx-auto text-white bg-bermuda"
                    >
                        Edit post
                    </Button>
                </Form>
            </>
        </>
    );
};

export default PostEdit;
