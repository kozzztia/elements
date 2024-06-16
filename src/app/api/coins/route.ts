import fs from 'fs/promises';
import path from 'path';
import { NextResponse } from 'next/server';


const filePath = path.resolve(process.cwd(), 'src/app/api/coins/coins.json');


// Function to read coins from file
async function readCoinsFromFile() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading coins file:', error);
    throw error; // You might want to handle this error more gracefully in a production app
  }
}


export async function GET(req : Request , res : Response) {
  try {
    const coins = await readCoinsFromFile();
    return NextResponse.json({ coins }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch coins' }, { status: 500 });
  }
}


