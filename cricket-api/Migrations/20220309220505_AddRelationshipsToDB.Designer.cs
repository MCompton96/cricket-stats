﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using cricket_api.Data;

namespace cricket_api.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20220309220505_AddRelationshipsToDB")]
    partial class AddRelationshipsToDB
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.2");

            modelBuilder.Entity("cricket_api.Models.Game", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<DateTime>("Date")
                        .HasColumnType("datetime2");

                    b.Property<string>("Opponent")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("cricket_api.Models.Location", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<Guid>("GameId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<string>("Ground")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Home")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("GameId")
                        .IsUnique();

                    b.ToTable("Location");
                });

            modelBuilder.Entity("cricket_api.Models.Result", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("By")
                        .HasColumnType("int");

                    b.Property<Guid>("GameId")
                        .HasColumnType("uniqueidentifier");

                    b.Property<int>("Method")
                        .HasColumnType("int");

                    b.Property<bool>("Won")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.HasIndex("GameId")
                        .IsUnique();

                    b.ToTable("Results");
                });

            modelBuilder.Entity("cricket_api.Models.Location", b =>
                {
                    b.HasOne("cricket_api.Models.Game", "Game")
                        .WithOne("Location")
                        .HasForeignKey("cricket_api.Models.Location", "GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Game");
                });

            modelBuilder.Entity("cricket_api.Models.Result", b =>
                {
                    b.HasOne("cricket_api.Models.Game", "Game")
                        .WithOne("Result")
                        .HasForeignKey("cricket_api.Models.Result", "GameId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Game");
                });

            modelBuilder.Entity("cricket_api.Models.Game", b =>
                {
                    b.Navigation("Location");

                    b.Navigation("Result");
                });
#pragma warning restore 612, 618
        }
    }
}
