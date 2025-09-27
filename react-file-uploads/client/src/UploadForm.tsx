/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { type FormEvent, useState } from 'react';
import { BrowserRouter } from 'react-router';

type Image = {
  imageId: number;
  url: string;
  caption: string;
};

export function UploadForm() {
  const [imageFile, setImageFile] = useState<Image>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const req = {
      method: 'POST',
      body: formData,
    };
    try {
      const res = await fetch('/api/uploads', req);
      if (!res.ok) throw new Error('500 error');

      const imageFile = (await res.json()) as Image;
      setImageFile(imageFile);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h3>React File Uploads</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Caption:
          <input required autoFocus type="text" id="caption" name="caption" />
        </label>
        <br />
        <input
          required
          type="file"
          name="image"
          accept=".png, .jpg, .jpeg, .gif"
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
