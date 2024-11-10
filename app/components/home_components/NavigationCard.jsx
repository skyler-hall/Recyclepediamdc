import Link from "next/link";

const NavigationCard = ({navCardDetails}) => {
    return (
        <div className="border-2 rounded-lg p-7">
            <div className="w-full h-full bg-black">{/*decor band*/}

            </div>
            <div className="self-center text-center">{/*contents*/}
                <h3 className="text-3xl m-2 mb-4">{navCardDetails.pageName}</h3>
                <h6 className="text-l m-2 mb-8">{navCardDetails.pageDesc}</h6>
                <Link href={navCardDetails.pageLink} className="bg-white rounded-lg border border-black px-3 py-2">
                    Explore
                </Link>
            </div>
        </div>
    );
}

export default NavigationCard;