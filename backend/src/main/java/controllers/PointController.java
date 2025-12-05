package controllers;

import data.PointDTO;
import exceptions.ValidationException;
import jakarta.ejb.EJB;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;
import services.PointCheckingService;

import java.math.BigDecimal;

@Path("/main")
@Produces(MediaType.APPLICATION_JSON)
public class PointController {

    @EJB
    PointCheckingService pointCheckingService;

    @POST
    @Path("/check")
    public Response checkPointForm(PointDTO point) {
        BigDecimal x = new BigDecimal(point.getX());
        BigDecimal y = new BigDecimal(point.getY());
        BigDecimal r = new BigDecimal(point.getR());
        try {
            return Response.ok(pointCheckingService.checkPoint(x, y, r)).build();
        }
        catch (ValidationException e) {
            return Response.status(Response.Status.BAD_REQUEST).build();
        }
    }
}
