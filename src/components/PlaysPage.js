import React, { useEffect, useState } from 'react'
import Header from './Header'
import Chatbot from '../chatbot'
import Heading from './heading'
import Loader from './Loader'
import Footer from './Footer'
import PlaysImageSlider from './PlaysImageSlider'
import PlaysList from './PlaysList'


const PlaysActivities = () => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loader loading={loading} />;
    }
    return (
    <div>
        <Header onSearch={setSearchTerm} />
        <Chatbot />
        <Heading />
        <PlaysImageSlider />
        <PlaysList searchTerm={searchTerm}/>
        <Footer />
    </div>
  )
}

export default PlaysActivities