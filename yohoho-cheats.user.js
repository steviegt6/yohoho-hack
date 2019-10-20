// ==UserScript==
// @name         Yohoho.io Cheats
// @namespace    http://yohoho.io/
// @version      1.2.0
// @description  Cheats for the popular IO game, Yohoho.IO!
// @author       Steviegt6
// @match        https://yohoho.io/
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @grant        none
// ==/UserScript==

// =-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-
// Contact Info:
// Steviegt6#9616 (discord)
// Steviegt6 (github)
// https://steviegt6/github.io/ (website)
// https://discordapp.com/invite/tYzEbqX (discord server)
// =-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-

// =-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-
// Version History:
// -=-=-=-=-
// v1.1.5 update
// Added 'P' command (pet)
// Added 'L' command (pet level)
// Setting your coins now automatically reloads
// Setting your XP not automatically reloads
// -=-=-=-=-
// -=-=-=-=-
// v1.1.5 patch
// XP patch 2.0
// -=-=-=-=-
// v1.1.4 patch
// XP patch
// -=-=-=-=-
// v1.1.3 patch
// Patch
// -=-=-=-=-
// v1.1.2 qol/patch
// Small qol tweaks
// Fixed skin selection bugs
// You're allowed to view the skisn menu again
// -=-=-=-=-
// v1.1.1 patch
// Small bug fixes
// -=-=-=-=-
// v1.1.0 update
// Fixed many bugs.
// -=-=-=-=-
// v1.0.0 release
// Initial release. Buggy.
// -=-=-=-=-
// =-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-

// =-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-
// Guide:
// Press 'O' to set your coins to any value you want!
// Press 'P' to change your pet!
// Press 'C' to change your character!
// Press 'I' to change your island! 
// Press 'X' to set your XP to any value you want!
// Press 'L' to set your pet's level!
// =-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-+-=-=-=-=-=-=-=-=-=-=-

showCheats();

document.title = "*HACKED* YoHoHo.io - pirate battle royale io game";

document.addEventListener('keydown', cheats, false);

function showCheats()
{
    var box = document.getElementById("desktop-controls");
    var controls = document.createElement("div");
    controls.className = "title2";
    controls.id = "hackids";
    var hacks = document.getElementById("hackids");
    var hackselement = document.createElement("div");
    var hackstextnode = document.createTextNode("I - Change your island (Conflicts with XP cheat.)" + " O - Gain a set amount of coins" + " P = Change your character, buggy" + " X = Set XP! (Conflicts with island cheat, buggy.)");
    hackselement.appendChild(hackstextnode);
    var controlstextnode = document.createTextNode("Cheats");
    box.appendChild(controls);
    box.appendChild(hackselement);
}

function cheats(e)
{
    if (e.keyCode =="79") //O - Coins
    {
        var a = prompt("What would you like to set your coin coint to?");
        if(isNaN(a))
        {
            alert("Oops! Something went wrong! Perhaps entering a number next time will solve the issue?")
        }
        else
        {
            localStorage.setItem("coinsOwned", a);
            document.getElementById("homepage-booty").innerHTML = a;
            document.getElementById("skin-popup-booty").innerHTML = a;
            alert("Gold set! Reloading...")
            location.reload()
        }
    }
    else if (e.keyCode == "88") //X - XP
    {
        var x = prompt("What would you like to set your XP to?");
        if(isNaN(x))
        {
            alert("Oops! Something went wrong! Perhaps entering a number next time will solve the issue?")
        }
        else if (x >= 13500)
        {
            localStorage.setItem("playerXP", 13500);
            alert("XP set! Reloading...")
            location.reload()
        }
        else if (x <= 0)
        {
            localStorage.setItem("playerXP", 0);
            alert("XP set! Reloading...")
            location.reload()
        }
        else
        {
            localStorage.setItem("playerXP", x);
            alert("XP set! Reloading...")
            location.reload()
        }
    }
    else if(e.keyCode == "67") //C - Character
    {
        var b = prompt("Which character would you like to become? Please pick a number between 1 and 35!")
        if (isNaN(b))
        {
            alert("Oops! something went wrong! Perhaps entering a number next time will solve the issue?")
        }
        else if (b < 1 || b > 35)
        {
            alert("Oops! something went wrong! Please choose a number between 1 and 35!")
        }
        else if (b != null || b != undefined || b!= "")
        {
            localStorage.setItem("playerSkin", b);
            alert("Skin selected! Reloading...")
            location.reload()
        }
    }
    else if(e.keyCode == "80") //P - Pet
    {
        var p = prompt("Which character would you like to become? Please pick a number between 1 and 7!")
        if (isNaN(p))
        {
            alert("Oops! something went wrong! Perhaps entering a number next time will solve the issue?")
        }
        else if (p < 1 || p > 7)
        {
            alert("Oops! something went wrong! Please choose a number between 1 and 7!")
        }
        else
        {
            localStorage.setItem("playerPet", p);
            alert("Pet selected! Reloading...")
            location.reload()
        }
    }
    else if(e.keyCode == "76") //L - Pet Level
    {
        var l = prompt("What level would you like your pet to be? Please pick a number between 1 and 14!")
        if (isNaN(l))
        {
            alert("Oops! something went wrong! Perhaps entering a number next time will solve the issue?")
        }
        else if (l < 1 || l > 14)
        {
            alert("Oops! something went wrong! Please choose a number between 1 and 14!")
        }
        else
        {
            localStorage.setItem("playerPetLevel", l);
            alert("Pet level selected! Reloading...")
            location.reload()
        }
    }
    else if(e.keyCode == "73") //I - Island
    {
        var c = prompt("Which island would you like to travel to?\n1 = Tortuga\n2 = Beach\n3 = Easter\n4 = Wreck\n5 = Aztec\n6 = Volcano\n7 = Village")
        if(c == 1) ////0,140,700,2100,4400,7600,13500
        {
            localStorage.setItem("playerXP", 0);
            alert("Island set to Tortuga. Reloading...");
            location.reload()
        }
        else if(c == 2)
        {
            localStorage.setItem("playerXP", 140);
            alert("Island set to Beach. Reloading...");
            location.reload()
        }
        else if(c == 3)
        {
            localStorage.setItem("playerXP", 700);
            alert("Island set to Easter. Reloading...");
            location.reload()
        }
        else if(c == 4){
            localStorage.setItem("playerXP", 2100);
            alert("Island set to Wreck. Reloading...");
            location.reload()
        }
        else if(c == 5){
            localStorage.setItem("playerXP", 4400);
            alert("Island set to Aztec. Reloading...");
            location.reload()
        }
        else if(c == 6){
            localStorage.setItem("playerXP", 7600);
            alert("Island set to Volcano. Reloading...");
            location.reload()
        }
        else if(c == 7){
            localStorage.setItem("playerXP", 13500);
            alert("Island set to Volcano. Reloading...");
            location.reload()
        }
        else if(c != (1 || 2 || 3 || 4 || 5 || 6 || 7)){
            alert("Oops! Something went wrong! Please enter a number between 1 and 7!");
            location.reload()
        }
    }
}