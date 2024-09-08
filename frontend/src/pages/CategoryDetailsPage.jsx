import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchCategoryDetails } from '../services/operations/categoriesAPI';
import WhiteBtn from '../components/common/WhiteBtn';
import { IoMdArrowRoundBack } from "react-icons/io";
import ShareModal from '../components/explore/ShareModal';
import { CSSTransition } from 'react-transition-group';
import '../cssFiles/CategoryDetails.css'; // Import your CSS file

const CategoryDetails = () => {
    const { categoryId } = useParams();
    const [response, setResponse] = useState(null);
    const [showComponent, setShowComponent] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const res = await fetchCategoryDetails(categoryId);
                if (res.success) {
                    setResponse(res);
                } else {
                    console.log("Error in response:", res.message);
                    setResponse({ success: false });
                }
            } catch (error) {
                console.log("Could not fetch Category Details", error);
                setResponse({ success: false });
            }
        })();
    }, [categoryId]);

    const {
        _id: category_id,
        title,
        description,
        thumbnail,
        posts,
        longDescription
    } = response?.data?.selectedCategory || {};

    const shareHandler = () => {
        setModalIsOpen(true);
    };

    const backbtnHandler = () => {
        setShowComponent(false);
        setTimeout(() => {
            navigate('/explore');
        }, 300);
    };

    return (
        <CSSTransition
            in={showComponent}
            timeout={300}
            classNames="fade"
            unmountOnExit
        >
            <div className='my-8'>
                <IoMdArrowRoundBack className='ml-[20px] mt-[8px] text-2xl fixed cursor-pointer' onClick={backbtnHandler} />
                <div className='flex justify-center items-center flex-col'>
                    <div
                        className='w-[600px] h-[330px] bg-cover bg-center bg-no-repeat flex justify-center items-center pb-6 relative rounded-[30px] m-2'
                        style={{ backgroundImage: `url(${thumbnail})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-40 rounded-[30px]"></div>
                        <div className='relative text-white flex flex-col items-center justify-center gap-4'>
                            <h2 className='text-xl font-semibold'>one word</h2>
                            <h2 className='text-4xl font-bold'>{title}</h2>
                            <WhiteBtn text={"Share"} btnHandler={shareHandler} />
                        </div>
                    </div>
                    <div className='w-[650px] text-center text-[17px] my-5'>
                        {longDescription}
                    </div>
                </div>
                <ShareModal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    url={window.location.href}
                />
            </div>
        </CSSTransition>
    );
};

export default CategoryDetails;
