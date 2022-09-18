import UserRepository from "../repository/UserRepository.js";
import * as httpStatus from "../../../config/constants/HttpStatus.js";
import UserException from "../exception/UserException.js";

class UserService {

    async findByEmail(req){
        try {
            const { email } = req.params;
            this.validarDadosRequisicao(email);

            let user = await UserRepository.findByEmail(email);
            this.validateUserNotFound(user);
            
            return {
                status: httpStatus.SUCCESS,
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            }
        } catch (err) {
            return {
                status: err.status? err.status : httpStatus.INTERNAL_SERVER_ERROR,
                messsage: err.message,
            }
        }
    }

    validarDadosRequisicao(email){
        if(!email){
            throw new UserException(httpStatus.BAD_REQUEST, "User email not informed!");
        }
    }

    validateUserNotFound(user) {
        if(!user){
            throw new UserException(httpStatus.BAD_REQUEST, "User not found!")
        }
    }

}

export default new UserService();