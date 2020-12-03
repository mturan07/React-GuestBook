using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using WebApi.Data;

namespace WebApi.Controllers
{
    public class EntriesController : ApiController
    {
        private dbGuestbookEntities db = new dbGuestbookEntities();

        // GET: api/Entries
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
        public IQueryable<Entry> GetEntries()
        {
            return db.Entries.OrderByDescending(k => k.InsertDate);
        }

        // GET: api/Entries/5
        [ResponseType(typeof(Entry))]
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
        public IHttpActionResult GetEntry(int id)
        {
            Entry entry = db.Entries.Find(id);
            if (entry == null)
            {
                return NotFound();
            }

            return Ok(entry);
        }

        // PUT: api/Entries/5
        [ResponseType(typeof(void))]
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
        public IHttpActionResult PutEntry(int id, Entry entry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != entry.Id)
            {
                return BadRequest();
            }

            db.Entry(entry).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EntryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Entries
        [ResponseType(typeof(Entry))]
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
        public IHttpActionResult PostEntry(Entry entry)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            entry.Id = db.Entries.DefaultIfEmpty().Max(t => t == null ? 1 : t.Id + 1);
            entry.InsertDate = DateTime.Now;
            db.Entries.Add(entry);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (EntryExists(entry.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = entry.Id }, entry);
        }

        // DELETE: api/Entries/5
        [ResponseType(typeof(Entry))]
        [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
        public IHttpActionResult DeleteEntry(int id)
        {
            Entry entry = db.Entries.Find(id);
            if (entry == null)
            {
                return NotFound();
            }

            db.Entries.Remove(entry);
            db.SaveChanges();

            return Ok(entry);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EntryExists(int id)
        {
            return db.Entries.Count(e => e.Id == id) > 0;
        }
    }
}