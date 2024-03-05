const { MongoClient, ServerApiVersion } = require("mongodb");

const url = "mongodb://localhost:27017/demoapp-development";
const client = new MongoClient(url, {
  serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
  }
});

interface CompanyData {
    _id: string;
    company_name: string;
    company_image: string;
    items: Item[];
}

interface Item {
    name: string;
    image: string;
    price: number;
    rank: number;
}

async function fetchData(companyName: string): Promise<CompanyData> {
  try {
    await client.connect();
    const db = client.db();
    const collection = db.collection('companies');

    // Fetch data from MongoDB based on company name
    const companyData = await collection.findOne({ company_name: companyName });

    if (!companyData) {
        throw new Error('Company not found');
    }

    // Map MongoDB document to CompanyData interface
    const mappedCompanyData: CompanyData = {
        _id: companyData._id.toHexString(), // Convert ObjectId to string
        company_name: companyData.company_name,
        company_image: companyData.company_image,
        items: companyData.items
    };

    return mappedCompanyData;
} catch (err) {
    console.error('Error fetching data:', err);
    throw err;
} finally {
    await client.close();
}
}

async function main() {
    const companyName = "Coupa Cafe";
    try {
        const companyData = await fetchData(companyName);
        console.log("Company Name:", companyData.company_name);
        console.log("Company Image:", companyData.company_image);
        console.log("Items:");
        companyData.items.forEach(item => {
            console.log("- Name:", item.name);
            console.log("  Image:", item.image);
            console.log("  Price:", item.price);
            console.log("  Rank:", item.rank);
        });
    } catch (error) {}
        console.error("Error fetching data:", error);
    }
}
main()