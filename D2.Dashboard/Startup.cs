using AutoMapper;
using D2.Dashboard.Core.Interfaces;
using D2.Dashboard.Core.Services;
using D2.Dashboard.Infrastructure.Data;
using D2.Dashboard.Infrastructure.Services;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace D2.Dashboard
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            // Configurations
            var config = Configuration.GetSection("BungieAPI");

            services.AddDbContext<Infrastructure.Data.AppDbContext>(options =>
                  options.UseSqlite("Data Source=destiny.db"));

            //Infrastructure.Data.AppDbContext
            //Mapper.Initialize(cfg =>
            //{
            //    //sat_dal.Startup.RegisterMaps();
            //    //cfg.AddProfile(new WebMappingProfile());  // mapping between Web view model and BLL service model
            //    //cfg.AddProfile(new BLLMappingProfile());  // mapping between API model and service model
            //    cfg.AddProfile(new sat_dal.DalMappingProfile());
            //});
            var mapConfig = new MapperConfiguration(cfg =>
            {
                cfg.AddProfile(new Core.MappingProfile());
                cfg.AddProfile(new Infrastructure.MappingProfile());
            });
            var mapper = mapConfig.CreateMapper();
            services.AddSingleton(mapper);

            //services.AddScoped<IBungieClanService, BungieClanService>()
            services.AddSingleton<IBungieClanService>(new BungieClanService(config["ApiKey"], mapper));
            services.AddScoped<ClanService>();
            services.AddScoped(typeof(IRepository<>), typeof(EfRepository<>));
            //services.AddScoped(typeof(IRepository), typeof(EfRepository));

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            //Adding Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info
                {
                    Version = "v1",
                    Title = "My API",
                    Description = "My First ASP.NET Core Web API",
                    TermsOfService = "None",
                    Contact = new Contact() { Name = "", Email = "", Url = "" }
                });
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller}/{action=Index}/{id?}");
            });

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
