import UserModal from "../models/user.js";
// Read

export const getUser = async(req,res)=>{

  const { id } = req.params;
  try {
    const tour = await UserModal.findById(id);
    res.status(200).json(tour);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};

export const getUserFriends = async(req,res)=>{

  const { id } = req.params;
  try {
    const user = await UserModal.findById(id);
    const friends=await Promise.all(
      user.friends.map((id)=>UserModal.findById(id))
  );
  const formatted=friends.map(
    ({_id,name,occupation,phone,location,imageFile,userName})=>{
return{_id,name,occupation,phone,location,imageFile,userName}
    }
);
    res.status(200).json(formatted);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
  }
};
    
//     try {
//         const id =req.params;
//         const user=await UserModal.findById(id);
        
       

//         res.status(201).json(formatted)
    
        
//     } catch (error) {
//         res.status(404).json({message: error.message});
//         console.log(error);
//     }
   
// }

export const addRemoveFriends = async(req,res)=>{
  const { id, friendId } = req.params;
    try {
        
        const user = await UserModal.findById(id);
        const friend = await UserModal.findById(friendId);
    
        if (user.friends.includes(friendId)) {
          user.friends = user.friends.filter((id) => id !== friendId);
          friend.friends = friend.friends.filter((id) => id !== id);
        } else {
          user.friends.push(friendId);
          friend.friends.push(id);
        }
        await user.save();
        await friend.save();
    
        const friends = await Promise.all(
          user.friends.map((id) => User.findById(id))
        );
        const formattedFriends = friends.map(
          ({_id,name,occupation,phone,location,imageFile,userName}) => {
            return {_id,name,occupation,phone,location,imageFile,userName};
          }
        );
    
        res.status(200).json(formattedFriends);
      } catch (err) {
        res.status(404).json({ message: err.message });
      }    
}