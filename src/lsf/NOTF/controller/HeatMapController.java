package lsf.NOTF.controller;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import lsf.NOTF.WS.db_connect;

@Path("/HeatMapController")
public class HeatMapController {
	@Path("{graphData}")
	@GET
	@Produces("application/json")
	public Response generateJson(@PathParam("graphData") String table){
		db_connect db_conn = new db_connect();
		db_conn.db_con(table);
		return null;
	}

}
