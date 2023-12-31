import HospitalCatalog from "@/components/HospitalCatalog";
import { render, waitFor, screen } from "@testing-library/react";

const mockResult = {
    success: true,
    count: 4,
    pagination: {},
    data: [
        {
            _id: "652f8c2b778f80457d2085e7",
            name: "Chulalongkorn Hospital",
            address: "1873 Rama IV Rd",
            district: "Pathum Wan",
            province: "Bangkok",
            postalcode: "10330",
            tel: "026494000",
            picture: "https://drive.google.com/uc?id=1nekIjHnFtGMdbmsYrBao55dGvtYER62P",
            __v: 0,
            id: "652f8c2b778f80457d2085e7"
        },
        {
            _id: "652f8c59778f80457d2085ea",
            name: "Rajavithi Hospital",
            address: "2 Phaya Thai Rd, Thung Phaya Thai",
            district: "Ratchathewi",
            province: "Bangkok",
            postalcode: "10400",
            tel: "022062900",
            picture: "https://drive.google.com/uc?id=15kWfVT9wchkH3I9BHKeqftTmj0bFgJtu",
            __v: 0,
            id: "652f8c59778f80457d2085ea"
        },
        {
            _id: "652f8c94778f80457d2085ed",
            name: "Thammasat University Hospital",
            address: "95 Moo 8 Phaholyothin Frontage Rd, Khlong Nueng",
            district: "Khlong Luang",
            province: "Pathum Thani",
            postalcode: "12120",
            tel: "029269999",
            picture: "https://drive.google.com/uc?id=1jit7S4cRATEfDi64YjjK1ur2jGlZYs2e",
            __v: 0,
            id: "652f8c94778f80457d2085ed"
        },
        {
            _id: "65426cd3c0b12e58155720fc",
            name: "Vajira Hospital",
            address: "681 Samsen Road",
            district: "Dusit",
            province: "Bangkok",
            postalcode: "10300",
            tel: "02-244-3000",
            picture: "https://drive.google.com/uc?id=1YLciRsApgCzbozEZQpnu_5hz5g0HsIwP",
            __v: 0,
            id: "65426cd3c0b12e58155720fc"
        }
    ]
}

describe('HospitalCatalog', () => {
    it('should have correct number of hospital images', async () => {
        const hospitalCatalog = await HospitalCatalog({ hospitalJson: mockResult })
        render(hospitalCatalog)
        await waitFor(
            ()=> {
                const hospitalImages = screen.queryAllByRole('img')
                expect(hospitalImages.length).toBe(4)
            }
        )
    })
})