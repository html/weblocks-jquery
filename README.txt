This is javascript files which allow to replace prototype-dependent functionality in weblocks with jquery-dependent functionality.
To use it copy jquery files (or link if you use this repository as a submodule) to pub/scripts directory, unload prototype, load jquery and these files.
Example of loading is following.

(defwebapp test-app
 :prefix "/" 
 :description "test-app: A new great application"
 :init-user-session 'test-app::init-user-session
 :autostart nil                   ;; have to start the app manually
 :ignore-default-dependencies t ;; accept the defaults
 :debug t
 :dependencies
 (list 
  (make-instance 'script-dependency :url "/pub/scripts/jquery-1.7.2.min.js")
  (make-instance 'stylesheet-dependency :url "/pub/stylesheets/main.css")
  (make-instance 'script-dependency :url "/pub/scripts/weblocks-jquery.js")
  (make-instance 'script-dependency :url "/pub/scripts/dialog-jquery.js")
  (make-instance 'script-dependency :url "/pub/scripts/jquery-seq.js")))   

