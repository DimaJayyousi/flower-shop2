export async function uploadimage(image) {
    try {
        const uploadResponse = await fetch('http://localhost:3000/upload', {
            method: 'POST',
            body: image,
            // Add this if you see CORS issues:
            headers: {
                'Accept': 'application/json',
            }
        });
        if (!uploadResponse.ok) {
            throw new Error('Image upload failed');
        }

        return uploadResponse;
    } catch (e) {
        return e;
    }
}
