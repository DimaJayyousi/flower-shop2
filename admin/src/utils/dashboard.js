
export async function uploadimage(image) {
    try {
        const uploadResponse = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: image,
            // Add this if you see CORS issues:
            headers: {
                Accept: 'application/json',
            }
        });
        const responseData = await uploadResponse.json(); 
        if (!uploadResponse.ok) {
            throw new Error('Image upload failed');
        }
        console.log('🎉 Image uploaded successfully!');
     
        return responseData;
    } catch (e) {
        return e;
    }


}

// 🛒 Add Product Function
export async function addfun(product) {
    try {
        const response = await fetch('http://localhost:3000/addproduct', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        if (!response.ok) {
            alert('Product addition failed');
        } else {
            alert('Product added 🎯');

        }

        return response;
    } catch (error) {
        console.error('Add Product Error:', error);
        return error;
    }
}