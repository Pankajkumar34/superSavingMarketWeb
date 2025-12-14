import React, { useState } from "react"
import { Userimg } from "../assetsImport/allAssets"
import Image from "next/image"
import { useAppDispatch, useAppSelector } from "@/utils/hooks/hooks";
import { fileUploadThunk } from "@/lib/thunkApis/authThunks";
const ProfilePicUpload = () => {
    const [preview, setPreview] = useState<string | null>(null)
    const dispatch = useAppDispatch()


    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (!files || files.length === 0) return

        const file = files[0]
        setPreview(URL.createObjectURL(file))
        const formData = new FormData()
        formData.append("file", files![0])
        const destination = "1"
        const formPayload = { formData, destination }
        try {
            const fileData = await dispatch(fileUploadThunk(formPayload)) as unknown as Promise<{ url: string }>
            console.log("fileData", fileData)
        } catch (error) {
            console.log("file upload error", error)

        }
    }

    const handleDelete = () => {
        setPreview(null)
        try {
            // const response = 
            
        } catch (error) {
            console.log("file delete error", error)
        }
    }

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="position-relative" style={{ width: "150px", height: "150px" }}>
                {/* Circular profile picture */}
                <Image
                    src={preview == null ? Userimg : preview}
                    alt="Profile"
                    width={"150"}
                    height={"150"}
                    className="rounded-circle border border-secondary"
                    style={{ width: "150px", height: "150px", objectFit: "cover" }}
                />

                {/* Camera icon overlay */}
                {!preview && (
                    <label
                        htmlFor="profileInput"
                        className="position-absolute bottom-0 end-0 bg-primary text-white rounded-circle d-flex justify-content-center align-items-center"
                        style={{ width: "40px", height: "40px", cursor: "pointer" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className="bi bi-camera"
                            viewBox="0 0 16 16"
                        >
                            <path d="M9.5 2a.5.5 0 0 1 .5.5v1h2A1.5 1.5 0 0 1 13.5 5v7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1.5 12V5A1.5 1.5 0 0 1 3 3.5h2v-1a.5.5 0 0 1 .5-.5h4zM4 4h8V5H4V4zm0 1h8v6H4V5z" />
                        </svg>
                    </label>
                )}

                {/* Delete button */}
                {preview && (
                    <button
                        type="button"
                        onClick={handleDelete}
                        className="position-absolute top-0 end-0 btn btn-sm btn-danger rounded-circle"
                        style={{ width: "30px", height: "30px", padding: 0 }}
                        title="Remove"
                    >
                        &times;
                    </button>
                )}

                {/* Hidden file input */}
                <input
                    type="file"
                    id="profileInput"
                    className="d-none"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>

            <p className="mt-2 text-muted">Upload your profile picture</p>
        </div>
    )
}

export default ProfilePicUpload
