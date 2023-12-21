import axios from "axios";
import {NextResponse} from "next/server";
import {ICity} from "@/app/lib/defenitions";

const api_key: string = process.env.GOOGLE_API_KEY as string;

export async function GET(req: Request) {
    try {
        const {searchParams} = new URL(req.url);
        const input: string | null = searchParams.get('input');

        if (!input) return NextResponse.json({message: "Bad request"}, {status: 400});

        const cities = await getPlaces(input);

        return NextResponse.json({places: cities}, {status: 200})
    } catch (error) {
        // @ts-ignore
        return NextResponse.json({message: 'Server error'}, {status: error?.status})
    }
}

const getPlaces = async (input: string): Promise<ICity[] | null> => {
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${api_key}&input=${input}`;
    try {
        const response = await axios.post(url);
        if (!response.data.predictions) {
            return null;
        }
        return response.data.predictions.map((prediction: any) => ({
            id: prediction.place_id,
            description: prediction.description,
        }));
    } catch (error) {
        return null;
    }
}

