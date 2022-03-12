using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL.Server.Ui.Voyager;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using cricket_api.Data;
using cricket_api.GraphQL;
using Microsoft.EntityFrameworkCore;
using cricket_api.GraphQL.Games;
using cricket_api.GraphQL.Results;
using cricket_api.GraphQL.Battings;
using cricket_api.GraphQL.Bowlings;
using cricket_api.GraphQL.Location;

namespace cricket_api
{
    public class Startup
    {
        private readonly IConfiguration Configuration;
        
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddPooledDbContextFactory<AppDbContext>(opt => opt.UseSqlServer(
                Configuration.GetConnectionString("CricketConStr")
            ));

            services
                .AddGraphQLServer()
                .AddQueryType<Query>()
                .AddType<GameType>()
                .AddType<ResultType>()
                .AddType<GameLocationType>()
                .AddType<BowlingType>()
                .AddType<BattingType>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            // app.UseGraphQLVoyager(new GraphQLVoyagerOptions()
            // {
            //     GraphQLEndPoint = "/graphql",
            //     Path = "/graphql-voyager"
            // });

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGraphQL();
            });
        }
    }
}
