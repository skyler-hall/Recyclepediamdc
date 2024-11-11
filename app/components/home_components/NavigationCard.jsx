import Link from "next/link";

const NavigationCard = ({navCardDetails}) => {
    return (
        <div className="border-2 rounded-lg">
            <div className="w-full h-8 md:h-12 object-cover bg-[#a9def9] rounded-md rounded-b-none">{/*decor band*/}

            </div>
            <div className="self-center text-center p-7 pt-4 pb-10">{/*contents*/}
                <h3 className="text-3xl m-2 mb-4">{navCardDetails.pageName}</h3>
                <h6 className="text-l m-2 mb-8">{navCardDetails.pageDesc}</h6>
                <Link href={navCardDetails.pageLink} className="bg-[#234E13] text-white rounded-2xl px-6 py-2">
                    Explore
                </Link>
            </div>
        </div>
    );
}

export default NavigationCard;