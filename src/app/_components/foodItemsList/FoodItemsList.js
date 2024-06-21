import { connectToDb } from '@/app/DB/configuration';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const FoodItemsList = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [id, setId] = useState("");
const router = useRouter()
  useEffect(() => {
    findRestroId();
  }, []);

  useEffect(() => {
    if (id) {
      getAllFoods();
    }
  }, [id]);

  const findRestroId = () => {
    const storedData = JSON.parse(localStorage.getItem("restaurantDetails"));
    if (storedData && storedData._id) {
      setId(storedData._id);
    } else {
      console.error("No restaurant ID found in local storage");
    }
  };
  const deleteHandler =async(idToDelete) =>{
    const response = await fetch(`http://localhost:3000/api/restaurant/foods/${idToDelete}`,{
      method:'DELETE'
    })
    const result = await response.json();
    if(result.success){
      alert(result.message)
      getAllFoods();
    }else{
      alert("Food Item deletion not successful..")
    }
  }
  const editHandler=(editId)=>{
    router.push(`/restaurant/dashboard/editFood/${editId}`)
  }

  const getAllFoods = async () => {
    console.log(id);
    connectToDb(); // Ensure this function is correctly implemented
    try {
      const response = await fetch(`http://localhost:3000/api/restaurant/foods/${id}`);
      const result = await response.json();
      if (result) {
        setAllFoods(result.allFoodItems);
      } else {
        console.log("No result came from the database.");
      }
    } catch (error) {
      console.error("Error fetching food items:", error);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>SN.</th>
          <th>Food Name</th>
          <th>Food Price</th>
          <th>Food Description</th>
          <th>Food Image</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {allFoods.map((food, index) => (
          <tr key={food._id || index}>
            <td>{index + 1}</td>
            <td>{food.foodName}</td>
            <td>{food.foodPrice}</td>
            <td>{food.foodDescription}</td>
            <td>
              <img
                src={food.foodImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxEvt4P1dtrhRqT1B29rtiD9mnwqpfUshyug&s"}
                alt={food.foodName || "Food Image"}
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
            </td>
            <td>
              <button onClick={()=>deleteHandler(food._id)}>Delete</button>
              <button onClick={()=>editHandler(food._id)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FoodItemsList;
