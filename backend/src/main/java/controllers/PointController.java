package controllers;

import data.PointDTO;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.math.BigDecimal;

@Path("/check")
@Produces(MediaType.APPLICATION_JSON)
public class PointController {
    @Path("/form")
    @POST
    public Response checkPointForm(PointDTO point) {
        BigDecimal x = new BigDecimal(point.getxText());
        BigDecimal y = new BigDecimal(point.getyText());
        BigDecimal r = new BigDecimal(point.getrText());

    }

    @Path("/svg")
    @POST
    public Response checkPointSvg(PointDTO point) {

    }
}
