import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const UploadForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    const uploadProduct = data => {
        // console.log(data.nameOfProduct,
        //     data.colors,
        //     data.category,
        //     data.description,
        //     data.ProductType,
        //     data.brandName,
        //     data.price,
        //     data.size1,
        //     data.size2,
        //     data.size3,
        //     data.size4,
        //     data.size5,
        //     data.img)

        const image = data?.img[0]
        console.log(image)

        const formData = new FormData()
        formData.append("file", image)
        formData.append('upload_preset', 'aafkdxzr')
        formData.append('cloud_name', 'dmfh8s0bz')

        fetch('https://api.cloudinary.com/v1_1/dmfh8s0bz/image/upload', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgInfo => {
                console.log(imgInfo.url)
                if (imgInfo) {
                    const img = imgInfo?.url;
                    const uploadData = {
                        Image: img === '' ? "No Image Uploaded" : img,
                        Name: data.nameOfProduct,
                        Price: data.price,
                        Size: [
                            data.size1,
                            data.size2,
                            data.size3,
                            data.size4,
                            data.size5
                        ],
                        Description: data.description,
                        Type: data.ProductType,
                        Category: data.category,
                        Brand: data.brandName,
                        Colors: data.colors
                    }
                    fetch('http://localhost:5000/uploadProduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(uploadData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success('Product uploaded to database successfully!')

                        })
                }
            })
        reset()
    }
    return (
        <div className='max-w-[1240px] mx-auto p-5 mt-3 bg-red-50 py-12'>
            <Link to='/admin'><button className='btn px-4 bg-gray-400 text-[10px] text-white p-[1px] mb-7'> go back to dashboard</button></Link>
            <form onSubmit={handleSubmit(uploadProduct)}>

                {/* Name of product  */}

                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="nameOfProduct" {...register('nameOfProduct')} id="Name-Of-Product" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="Name-Of-Product" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name Of Product</label>
                </div>



                {/* category of product  */}
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="Price" {...register('price')} id="category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="category" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                </div>

                {/* Description about product */}
                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="Description" {...register('description')} id="description" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="description" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>

                {/* Name of Brand  */}
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="Brand Name" id="Brand" {...register('brandName')} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label htmlFor="Brand" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name Of Brand</label>
                    </div>

                    {/* type of cloth */}
                    <div className="relative z-0 w-full mb-6 group">

                        {/* dropdown start*/}


                        <label htmlFor="underline_select" name="floating_last_name" id="cloth Type" className="sr-only
                        
                        ">Underline select</label>
                        <select id="" {...register('ProductType')} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-400 peer" required>

                            <option value="Not Available" defaultValue>Select Product Type</option>
                            <option value="Shirt">SHIRT</option>
                            <option value="Jeanse">Jeanse</option>
                            <option value="T-shirt">T-shirt</option>
                        </select>


                        {/* dropdown end */}


                    </div>
                </div>

                {/* Category of Product  */}
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-6 group">


                        <label htmlFor="underline_select" name="floating_last_name" id="cloth Type" className="sr-only
                        
                        ">Underline select</label>
                        <select id="" {...register('category')} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-400 peer" required>

                            <option value="Not Available" defaultValue>Select Category</option>
                            <option value="Gents">Gents</option>
                            <option value="Ladies">Ladies</option>
                            <option value="Kids">Kids</option>
                        </select>



                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="Colors" {...register('colors')} id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                        <label htmlFor="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Colors (use comma between every color)</label>
                    </div>
                </div>

                {/* size dropdown  */}

                <div className='flex flex-wrap gap-6 mb-4'>

                    <input type="text" {...register('size1')} className='block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder='Type Size 1' />
                    <input type="text" {...register('size2')} className='block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder='Type Size 2' />
                    <input type="text" {...register('size3')} className='block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder='Type Size 3' />
                    <input type="text" {...register('size4')} className='block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder='Type Size 4' />
                    <input type="text" {...register('size5')} className='block py-2.5 px-0  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer' placeholder='Type Size 5' />

                </div>

                <div className="flex items-center justify-center w-full my-4">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" {...register('img')} className="hidden " />
                    </label>
                </div>

                <input type="submit" className='btn btn-primary' value="Submit" />
            </form>

        </div>
    );
};

export default UploadForm;