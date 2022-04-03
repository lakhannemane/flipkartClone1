
import User from '../Module/UserSchema.js'

export const userSignUp = async (request, response) => {

    console.log("hello inside usersignup")

    try {
        console.log("hello inside usersignup")
        const exist = await User.findOne({ username: request.body.username });
        if (exist) {
            return response.status(401).json('User already exist');
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        // console.log(newUser);
        response.status(200).json(`${user.firstname} has been successfully registered`);

    } catch (error) {
        response.send('Error: ', error.message);
    }
}

export const userLogin = async (request, response) => {

    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        // console.log(request.body.username);
        if (user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);
    }


}