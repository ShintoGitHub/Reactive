using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ValuesController : ControllerBase
    {
        private readonly DataContext _context;

        public ValuesController(DataContext context)
        {
            this._context = context;
        }

        //Get api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Value>>> Get()
        {
            var result = await _context.Values.ToListAsync();
            return Ok(result);
        }

        //Get  api/Values/5
        [HttpGet("{id}")]
        public async Task<ActionResult<string>> Get(int id)
        {
            var result = await _context.Values.FindAsync(id);    
            if(result==null)
                return NotFound();        
            return Ok(result);
        }
    }
}