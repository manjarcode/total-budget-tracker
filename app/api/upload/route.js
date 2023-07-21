import { NextResponse } from 'next/server'

import formidable from 'formidable'

export async function POST(req, res) {

  const form = formidable()

  form.parse(req, (err, fields, files) => {
    if (err) {
      throw err 
    }

    const uploadedFile = files.file;
 
    return NextResponse.json(uploadedFile)
  });
}


