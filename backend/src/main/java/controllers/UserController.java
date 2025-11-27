package controllers;

import data.ResponseMessageDTO;
import data.UserDTO;
import jakarta.inject.Inject;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import services.UserService;

@Path("/auth")
@Consumes(MediaType.APPLICATION_JSON)
public class UserController {

    @Inject
    UserService userService;

    @POST
    @Path("/login")
    public Response login(UserDTO user) {
        boolean check = userService.checkUser(user.getLogin(), user.getPassword());
        if (check) {
            return Response.ok(new ResponseMessageDTO("Вход выполнен успешно")).build();
        }
        return Response.status(Response.Status.UNAUTHORIZED).entity("Ошибка входа").build();
    }

    @POST
    @Path("/register")
    public Response register(UserDTO user) {
        boolean register = userService.registerUser(user.getLogin(), user.getPassword());
        if (register) {
            return Response.ok(new ResponseMessageDTO("Пользователь успешно зарегистрирован")).build();
        }
        return Response.status(Response.Status.BAD_REQUEST).entity(new ResponseMessageDTO("Ошибка регистрации")).build();
    }
}
