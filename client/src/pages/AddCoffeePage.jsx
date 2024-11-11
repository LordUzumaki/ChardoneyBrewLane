import React from 'react';
import AddCoffeeForm from '../components/AddCoffeeForm';

const AddCoffeePage = () => {
    
    return (
        <div className="container mx-auto p-4"> {/* Optional styling */}
            <h1 className="text-2xl font-bold mb-4">Add New Coffee</h1>
            <AddCoffeeForm />
        </div>
    );
};

export default AddCoffeePage;
