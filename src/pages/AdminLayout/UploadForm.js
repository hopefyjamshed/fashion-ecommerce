import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { IconName,AiOutlinePlus } from "react-icons/ai";


const UploadForm = () => {
    
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
const inputRef=useRef(null)
const inputRef2=useRef(null)
const [uploadImage,setUploadImage]=useState("")


const handleClick=()=>{
inputRef.current.click()
};

const handleImageChange=(event)=>{
    const file = event.target.files[0]
   
    setUploadImage(file)
    console.log(file)
};



    

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
        //     data.img
       
        const image = uploadImage
        console.log(image)
        console.log(data.clr)

       const preset= 'bm3g09m1';

        const formData = new FormData()
        formData.append("file", image)
        formData.append('upload_preset', preset )
        formData.append('cloud_name', 'dulqt6a14')

        

        fetch('https://api.cloudinary.com/v1_1/dulqt6a14/image/upload', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgInfo => {
                console.log(imgInfo)
                if (imgInfo) {
                    const img = imgInfo?.url;
                    console.log(img)
                    const uploadData = {
                        Image: img==='' ? "no image appeard": img,
                        
                        Name: data.nameOfProduct,
                        ribbon: data.ribbon,
                        Price: data.price,
                        goods_cost: data.goods_cost,
                        product_info: data.product_info,
                        return: data.return,
                        shipping: data.shipping,
                        profit:data.profit,
                        discount: data.discount,
                        Size: [
                            data.size1,
                            data.size2,
                            data.size3,
                            data.size4
                        ],
                        Description: data.description,
                        Type: data.ProductType,
                        Category: data.category,
                        Brand: data.brand,
                        color: [
                            data.color1,
                            data.color2,
                            data.color3,
                            data.color4
                        ]
                       
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
        <div className='max-w-[1240px] mx-auto p-5 mt-3 py-12 bg-gray-100'>
           
            <Link to='/admin'><button className='btn px-4 bg-gray-400 text-[10px] text-white p-[1px] mb-7'> go back to dashboard</button></Link>
            

            <div>
 <div  className='card bg-white' >

   <h1 className='card-title text-[20px] px-[30px] py-[20px] text-center lg:text-[25px]'>Images</h1>
   <hr className='mb- text-full'></hr>

<div className='flex'>

 {/* first image  */}
   <div onClick={handleClick}>
  {
    uploadImage?
    <img className='h-[300px] rounded-[1rem] mx-[6%] lg:mx-[30px] my-[30px] w-[300px]' src={URL.createObjectURL(uploadImage)}></img>
    :
 <div className=''>
    
    <div className='w-[200px] p-[50px]  mx-[6%] lg:mx-[30px] my-[30px] rounded-lg bg-blue-50 hover:bg-blue-100 flex justify-center items-center border-dashed border-[3px] h-[200px] border border-blue-200'>
        <AiOutlinePlus className='text-[100px] text-blue-200'></AiOutlinePlus>
    <div className=''></div>

    </div>

 </div>
 }
 </div>
 {/* first image  */}

 {/* second image  */}
 {/* <div onClick={handleClick2}>
 { 
    uploadImage?
    <img className='h-[200px] px-[20px] py-[20px] w-[200px]' src={URL.createObjectURL(uploadImage2)}></img>
    :
 <div className=''>
    
    <div className='w-[100px] p-[20px] hover:bg-blue-100 flex ml-[20px] justify-center items-center border-dotted border-[3px] h-[100px] border border-blue-200'>
        <AiOutlinePlus className='text-[100px] text-blue-200'></AiOutlinePlus>
    <div className=''></div>

    </div>

 </div>
 }
 </div> */}

 {/* second image  */}

 </div>
 </div>
 </div>
            <form onSubmit={handleSubmit(uploadProduct)}>
               

 {/* newly implemented image  */}

  <input type="file" {...register('img')} onChange={handleImageChange} className='hidden' ref={inputRef}></input>
  {/* <input type="file" {...register('img2')} onChange={handleImageChange2} className='hidden' ref={inputRef2}></input> */}


    




  {/* newly implemented image  */}


                {/* image  */}


                {/* product info  */}
                <div className='card bg-white mt-5'>
                    <h1 className='card-title text-[20px] px-[30px] py-[20px] text-center lg:text-[25px]'>product info</h1>
                    <hr></hr>
                    <h3 className='font-medium uppercase text-[18px] px-[30px] py-[20px] text-gray-600'>basic info</h3>

                    <div className='flex gap-12 p-5'>
                        {/* name of product  */}
                    <div className="relative z-0 w-full mb-6 group">
                        <h3>Name</h3>
                    <input type="text" name="nameOfProduct" {...register('nameOfProduct')} id="Name-Of-Product" className="block rounded-md border hover:bg-blue-100 py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent px-2 border-0 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " required />
                    <label htmlFor="Name-Of-Product" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]  peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                 </div>

                 {/* name of product  */}

                 {/* ribbon  */}
                 <div className="relative z-0 w-full mb-6 group">
                    <h4>ribbon</h4>
                    <input type="text" name="ribbon" {...register('ribbon')} id="ribbon" className="block rounded-md hover:bg-blue-100 py-2.5 px-2 w-30% text-sm text-gray-900 bg-transparent border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder="e.g., New Arrival " required />
                    <label htmlFor="ribbon" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"></label>
                 </div>

                 {/* ribbon  */}

                    </div>
                   {/* description  */}
                   <h3 className='px-5'>Description</h3>
                    <textarea type="text" name="Description" {...register('description')} placeholder="Type here" className="border hover:bg-blue-100 textarea p-5 rounded-md mx-5 my-5 border-gray-400 focus:border-gray-300 border-[2px] focus:border-[2px] " />
                    
<hr className='border border-[5px]'></hr>


                    {/* additional info  */}
                    <h3 className='font-medium uppercase text-[18px] px-[30px] py-[20px] text-gray-600'>additional info section</h3>
                    <div className='p-5'>
                    <div className='flex gap-5 items-center'>
                 <h3 className='w-full text-[10px] text-[15px] text-medium text-gray-500 uppercase'>product info</h3>
                        <input type="text" {...register('product_info')} placeholder="Type here" className="input bg-blue-100 lg:bg-white hover:bg-blue-100 input-ghost w-full" />
                    </div>
                      <div className='flex gap-5 items-center mt-[10px]'>
                   <h3 className='w-full text-[10px] text-[13px] text-medium text-gray-500 uppercase'>RETURN & REFUND POLICY</h3>
                    <input type="text" {...register('return')} placeholder="Type here" className="input bg-blue-100 lg:bg-white hover:bg-blue-100 input-ghost w-full" />
                  </div>
                   <div className='flex gap-5 items-center mt-[10px]'>
                     <h3 className='w-full text-[10px] text-[15px] text-medium text-gray-500 uppercase'>shipping info</h3>
                   <input type="text" {...register('shipping')} placeholder="Type here" className="input bg-blue-100 lg:bg-white hover:bg-blue-100 input-ghost w-full" />
                  </div>

                     {/* additional info  */}

                </div>

{/* pricing  */}
                </div>                
                    <div className='card bg-white mt-5'>
                    <h3 className='card-title text-[20px] px-[30px] py-[20px] text-center lg:text-[25px]'>Pricing</h3>
                    <hr></hr>

                    {/* price  */}
                    <h3 className='px-[30px] mb-2 py-3'>Price</h3>
                    <input type="text" name="Price" {...register('price')} placeholder="Type Price" className="rounded-md mx-[30px] px-5 input-bordered focus:border-blue-200 input-md w-[200px] max-w-xs" />
                   
                   <div className='lg:flex mb-7'>
                    {/* cost of goods */}
                    <div>
                    <h3 className='px-[30px] mb-2 py-3'>Cost Of Goods</h3>
                    <input type="text" name="goods_cost" {...register('goods_cost')} placeholder="Type cost" className="rounded-md mx-[30px] px-5 input-bordered focus:border-blue-200 input-md w-[200px] max-w-xs" />
                    </div>

                   {/* profit */}
                    <div>
                    <h3 className='px-[30px] mb-2 py-3'>Profit</h3>
                    <input type="text" name="profit" {...register('profit')} placeholder="Type Profit" className="rounded-md mx-[30px] px-5 input-bordered focus:border-blue-200 input-md w-[200px] max-w-xs" />
                    </div>

                   {/* discount */}
                    <div>
                    <h3 className='px-[30px] mb-2 py-3'>Discount</h3>
                    <input type="text" name="discount" {...register('discount')} placeholder="%" className="rounded-md mx-[30px] px-5 input-bordered focus:border-blue-200 input-md w-[200px] max-w-xs" />
                   
                   </div>
                    </div>
                    </div> 

{/* product option  */}
                 <div className='card bg-white mt-5'>
                 <h1 className='card-title text-[20px] px-[30px] py-[20px] text-center lg:text-[25px]'>product info</h1>
                    <hr></hr>
                    <div className='p-5'>
                 <div className='flex gap-5 items-center'>
                 <h3 className='w-full text-[10px] text-[15px] text-medium text-gray-500 uppercase'>size</h3>
                        <div className='flex justify-start gap-2 lg:gap-5'>
                        <input type="text" {...register('size1')} placeholder="1" className="input border input-borderd bg-blue-100  focus:border-blue-200 hover:bg-blue-100 w-[50px]" />
                        <input type="text" {...register('size2')} placeholder="2" className="input border input-borderd bg-blue-100  focus:border-blue-200 hover:bg-blue-100 w-[50px]" />
                        <input type="text" {...register('size3')} placeholder="3" className="input border input-borderd bg-blue-100  focus:border-blue-200 hover:bg-blue-100 w-[50px]" />
                        <input type="text" {...register('size4')} placeholder="4" className="input border input-borderd bg-blue-100  focus:border-blue-200 hover:bg-blue-100 w-[50px]" />

                        </div>
                    </div>
                    
                 <div className='md:flex gap-2 lg:gap-5 items-center mt-5'>
                 <h3 className='w-full text-[10px] text-[15px] text-medium text-gray-500 uppercase'>Colors</h3>
                 <div className='md:flex-nowrap flex-wrap flex justify-start gap-5 '>
                        <input type="text" {...register('color1')} placeholder="1" className="input border input-borderd bg-blue-100  focus:border-blue-200 hover:bg-blue-100 w-[80px]" />
                        <input type="text" {...register('color2')} placeholder="2" className="input border input-borderd bg-blue-100  focus:border-blue-200 hover:bg-blue-100 w-[80px]" />
                        <input type="text" {...register('color3')} placeholder="3" className="input border input-borderd bg-blue-100  focus:border-blue-200 hover:bg-blue-100 w-[80px]" />
                        <input type="text" {...register('color4')} placeholder="4" className="input border input-borderd bg-blue-100  focus:border-blue-200 hover:bg-blue-100 w-[80px]" />     
                    </div> 
                  </div>
                  <div className='flex mt-5'>
                  <h3 className='w-full text-[10px] text-[15px] text-medium text-gray-500 uppercase py-3'>Brand</h3>
                    <input type="text" {...register('brand')} placeholder="provide Brand name" className="input border input-borderd bg-blue-100  focus:border-blue-200 hover:bg-blue-100 w-full" />     
                  </div>
                      
                  </div>
                     {/* additional info  */}
 
                 </div>

                 <div className='card bg-white mt-5'>
                 <h1 className='card-title text-[20px] px-[30px] py-[20px] text-center lg:text-[25px]'>Category</h1>
                    <hr></hr>


                    <div className='lg:flex gap-5'>
                    <div className="relative z-0 w-[200px] mb-6 group">

{/* dropdown start*/}
<label htmlFor="underline_select" name="floating_last_name" id="cloth Type" className="sr-only

">Underline select</label>
<select id="" {...register('ProductType')} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-2 rounded-md mt-5 px-5 lg:mx-5 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-400 peer" required>

    <option value="Not Available" defaultValue>Select Product Type</option>
    <option value="Shirt">SHIRT</option>
    <option value="Jeanse">Jeanse</option>
    <option value="T-shirt">T-shirt</option>
</select>


{/* dropdown end */}


</div>

<div className="relative z-0 w-[200px] mb-6 group">


<label htmlFor="underline_select" name="floating_last_name" id="cloth Type" className="sr-only

">Underline select</label>
<select id="" {...register('category')} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-2 rounded-md mt-5 px-5 lg:mx-5 border-gray-300 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-400 peer" required>

    <option value="Not Available" defaultValue>Select Category</option>
    <option value="Gents">Gents</option>
    <option value="Ladies">Ladies</option>
    <option value="Kids">Kids</option>
</select>



</div>
                    </div>
                    </div>
                {/* Name of Brand  */}
                <hr className='mt-5 border border-3 border black'></hr>
                <div className='relative py-5 mb-6'>
                <input type="submit" className='btn bg-blue-400 text-white absolute end-5 buttom-6 rounded-full hover:bg-blue-300 h-[20px] w-[100px] mt-5' value="Save" />
                </div>
            </form>

        </div>
    );
};

export default UploadForm;