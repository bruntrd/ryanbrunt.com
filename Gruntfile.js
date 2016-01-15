module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'client/scripts/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            },
            controllers: {
                src: "client/scripts/controllers/controller.js",
                dest: "server/public/assets/scripts/controllers/controller.min.js"
            }
        },
        copy: {
            angular: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular/angular.min.js",
                    "angular/angular.min.js.map"

                ],
                "dest": "server/public/vendors/"
            },
            angularRoute: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    "angular-route/angular-route.min.js",
                    "angular-route/angular-route.min.js.map"

                ],
                "dest": "server/public/vendors/"
            },
            jquery: {
                expand: true,
                cwd: 'node_modules',
                src: [
                    'jquery/dist/jquery.js',
                    'jquery/dist/jquery.min.js',
                    'jquery/dist/jquery.min.map'
                ],
                "dest": "server/public/vendors/"
            },
            html: {
                expand: true,
                cwd: "client",
                src: "views/index.html",
                dest: "server/public/assets/"
            },
            htmlRoutes: {
                expand: true,
                cwd: "client",
                src: [
                ],
                dest: "server/public/assets/"
            },
            style: {
                expand: true,
                cwd: 'client',
                src: [
                    "styles/style.css"
                ],
                "dest": "server/public/assets"
            },
            htmlRoutes: {
                expand: true,
                cwd: "client",
                src: [

                    "views/routes/home.html",
                    "views/routes/resume.html",
                    "views/routes/projects.html",
                    "views/routes/about.html",
                    "views/routes/contact.html"
                ],
                dest: "server/public/assets/"
            },
            photos: {
                expand: true,
                cwd:'client',
                src: [
                    "styles/photos/curlingarena.png",
                    "styles/photos/albs.png",
                    "styles/photos/lnr.png",
                    "styles/photos/family.png",
                    "styles/photos/ryancurling.jpg",
                    "styles/photos/lrRedrock.jpg",
                    "styles/photos/minnisky.png",
                    "styles/photos/macandcoffee.png",
                    "styles/photos/resumephoto.png",
                    "styles/photos/trials_photo.png",
                    "styles/photos/projects.png"
                ],
                dest:"server/public/assets/"

            },
            bootstrap: {
                expand: true,
                cwd: "node_modules/",
                src: [
                    "bootstrap/dist/css/bootstrap.min.css"
                ],
                "dest": "server/public/vendors/"
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};
