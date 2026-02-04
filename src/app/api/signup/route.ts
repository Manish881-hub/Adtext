import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password, appName, appType, url, ...otherFields } = body;

        // Simple validation
        if (!email || !password) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const dbPath = path.join(process.cwd(), 'data', 'publishers.json');
        const dataDir = path.dirname(dbPath);

        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        let users = [];
        if (fs.existsSync(dbPath)) {
            const fileContent = fs.readFileSync(dbPath, 'utf8');
            try {
                users = JSON.parse(fileContent);
            } catch (e) {
                users = [];
            }
        }

        // Check if email exists
        if (users.some((u: any) => u.email === email)) {
            return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
        }

        const newUser = {
            id: Date.now().toString(),
            appName,
            appType,
            url,
            email,
            password, // Not hashed for this demo, but absolutely should be in production
            ...otherFields,
            createdAt: new Date().toISOString()
        };

        users.push(newUser);
        fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));

        return NextResponse.json({ success: true, message: 'Signup successful' });
    } catch (error) {
        console.error('Signup error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
