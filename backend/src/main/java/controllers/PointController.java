package controllers;

import data.PointDTO;
import exceptions.ValidationException;
import jakarta.ejb.EJB;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.Response;
import services.DatabaseManager;
import services.PointCheckingService;

import java.math.BigDecimal;

@Path("/main")
public class PointController {

    @EJB
    PointCheckingService pointCheckingService;
    @EJB
    DatabaseManager databaseManager;

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

    @DELETE
    @Path("/delete")
    public Response clearHistory() {
        databaseManager.clearResults();
        return Response.ok().build();
    }

    @GET
    @Path("/load")
    public Response loadHistory() {
        return Response.ok(databaseManager.getResults()).build();
    }
}
