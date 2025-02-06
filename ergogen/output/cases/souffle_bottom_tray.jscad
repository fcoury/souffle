function _bottom_case_walls_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[89.5902827,-38.3834904],[109.3546113,-111.2104994]]).appendArc([109.7588719,-111.573376],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([220.3899615,-129.1111949]).appendArc([220.9663403,-128.6609807],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([222.2601614,-113.8866732]).appendArc([222.5116742,-113.4953236],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([222.7645809,-113.3519525]).appendArc([223.018,-112.9169837],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([223.018,-55.7525]).appendArc([222.518,-55.2525],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([203.270492,-55.2525]).appendArc([202.7704924,-54.7518615],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([202.7929988,-37.1293519]).appendPoint([202.7942134,-36.1783699]).appendArc([202.2943354,-35.6777313],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([184.7928784,-35.6734742]).appendArc([184.293,-35.1734742],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.293,-33.8775]).appendArc([183.793,-33.3775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([166.293,-33.3775]).appendArc([165.793,-32.8775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.793,-31.8025]).appendArc([165.293,-31.3025],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([145.865,-31.3025]).appendArc([145.365,-31.8025],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([145.365,-32.8775]).appendArc([144.865,-33.3775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([127.365,-33.3775]).appendArc([126.865,-33.8775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([126.865,-37.2515527]).appendArc([126.3650135,-37.7515527],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([90.0728148,-37.7525336]).appendArc([89.5902827,-38.3834904],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.subtract(
    new CSG.Path2D([[90.9881127,-38.9525089],[110.3517272,-110.3029784]]).appendPoint([110.3940939,-110.4590902]).appendPoint([219.8364051,-127.8084576]).appendPoint([219.8597944,-127.541373]).appendPoint([221.1670637,-112.6135]).appendPoint([221.818,-112.6135]).appendPoint([221.818,-56.4525]).appendPoint([202.0689585,-56.4525]).appendArc([201.5689589,-55.9518615],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([201.5929998,-37.1278193]).appendPoint([201.5933194,-36.8775609]).appendPoint([183.5928784,-36.8731824]).appendArc([183.093,-36.3731824],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([183.093,-34.5775]).appendPoint([165.093,-34.5775]).appendArc([164.593,-34.0775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([164.593,-32.5025]).appendPoint([146.565,-32.5025]).appendPoint([146.565,-34.0775]).appendArc([146.065,-34.5775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([128.065,-34.5775]).appendPoint([128.065,-38.4515203]).appendArc([127.5650135,-38.9515203],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([90.9881127,-38.9525089]).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
}


function _mcu_wall_cutout_extrude_2_2_outline_fn(){
    return new CSG.Path2D([[208.279,-84.2625],[216.279,-84.2625]]).appendPoint([216.279,-41.3625]).appendPoint([208.279,-41.3625]).appendPoint([208.279,-84.2625]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.2] });
}


function _bottom_case_outer_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[89.5902827,-38.3834904],[109.3546113,-111.2104994]]).appendArc([109.7588719,-111.573376],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([220.3899615,-129.1111949]).appendArc([220.9663403,-128.6609807],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([222.2601614,-113.8866732]).appendArc([222.5116742,-113.4953236],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([222.7645809,-113.3519525]).appendArc([223.018,-112.9169837],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([223.018,-55.7525]).appendArc([222.518,-55.2525],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([203.270492,-55.2525]).appendArc([202.7704924,-54.7518615],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([202.7929988,-37.1293519]).appendPoint([202.7942134,-36.1783699]).appendArc([202.2943354,-35.6777313],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([184.7928784,-35.6734742]).appendArc([184.293,-35.1734742],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.293,-33.8775]).appendArc([183.793,-33.3775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([166.293,-33.3775]).appendArc([165.793,-32.8775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.793,-31.8025]).appendArc([165.293,-31.3025],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([145.865,-31.3025]).appendArc([145.365,-31.8025],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([145.365,-32.8775]).appendArc([144.865,-33.3775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([127.365,-33.3775]).appendArc([126.865,-33.8775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([126.865,-37.2515527]).appendArc([126.3650135,-37.7515527],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([90.0728148,-37.7525336]).appendArc([89.5902827,-38.3834904],{"radius":0.5,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _screws_extrude_1_outline_fn(){
    return CAG.circle({"center":[191.871694,-109.4866677],"radius":1.1})
.union(
    CAG.circle({"center":[119.707,-111.365],"radius":1.1})
).union(
    CAG.circle({"center":[183.218,-70.4235],"radius":1.1})
).union(
    CAG.circle({"center":[109.25,-91.25],"radius":1.1})
).union(
    CAG.circle({"center":[109.25,-73.75],"radius":1.1})
).extrude({ offset: [0, 0, 1] });
}




                function souffle_bottom_tray_case_fn() {
                    

                // creating part 0 of case souffle_bottom_tray
                let souffle_bottom_tray__part_0 = _bottom_case_walls_extrude_6_6_outline_fn();

                // make sure that rotations are relative
                let souffle_bottom_tray__part_0_bounds = souffle_bottom_tray__part_0.getBounds();
                let souffle_bottom_tray__part_0_x = souffle_bottom_tray__part_0_bounds[0].x + (souffle_bottom_tray__part_0_bounds[1].x - souffle_bottom_tray__part_0_bounds[0].x) / 2
                let souffle_bottom_tray__part_0_y = souffle_bottom_tray__part_0_bounds[0].y + (souffle_bottom_tray__part_0_bounds[1].y - souffle_bottom_tray__part_0_bounds[0].y) / 2
                souffle_bottom_tray__part_0 = translate([-souffle_bottom_tray__part_0_x, -souffle_bottom_tray__part_0_y, 0], souffle_bottom_tray__part_0);
                souffle_bottom_tray__part_0 = rotate([0,0,0], souffle_bottom_tray__part_0);
                souffle_bottom_tray__part_0 = translate([souffle_bottom_tray__part_0_x, souffle_bottom_tray__part_0_y, 0], souffle_bottom_tray__part_0);

                souffle_bottom_tray__part_0 = translate([-75,0,0], souffle_bottom_tray__part_0);
                let result = souffle_bottom_tray__part_0;
                
            

                // creating part 1 of case souffle_bottom_tray
                let souffle_bottom_tray__part_1 = _mcu_wall_cutout_extrude_2_2_outline_fn();

                // make sure that rotations are relative
                let souffle_bottom_tray__part_1_bounds = souffle_bottom_tray__part_1.getBounds();
                let souffle_bottom_tray__part_1_x = souffle_bottom_tray__part_1_bounds[0].x + (souffle_bottom_tray__part_1_bounds[1].x - souffle_bottom_tray__part_1_bounds[0].x) / 2
                let souffle_bottom_tray__part_1_y = souffle_bottom_tray__part_1_bounds[0].y + (souffle_bottom_tray__part_1_bounds[1].y - souffle_bottom_tray__part_1_bounds[0].y) / 2
                souffle_bottom_tray__part_1 = translate([-souffle_bottom_tray__part_1_x, -souffle_bottom_tray__part_1_y, 0], souffle_bottom_tray__part_1);
                souffle_bottom_tray__part_1 = rotate([0,0,0], souffle_bottom_tray__part_1);
                souffle_bottom_tray__part_1 = translate([souffle_bottom_tray__part_1_x, souffle_bottom_tray__part_1_y, 0], souffle_bottom_tray__part_1);

                souffle_bottom_tray__part_1 = translate([-75,0,1], souffle_bottom_tray__part_1);
                result = result.subtract(souffle_bottom_tray__part_1);
                
            

                // creating part 2 of case souffle_bottom_tray
                let souffle_bottom_tray__part_2 = _bottom_case_outer_outline_extrude_1_outline_fn();

                // make sure that rotations are relative
                let souffle_bottom_tray__part_2_bounds = souffle_bottom_tray__part_2.getBounds();
                let souffle_bottom_tray__part_2_x = souffle_bottom_tray__part_2_bounds[0].x + (souffle_bottom_tray__part_2_bounds[1].x - souffle_bottom_tray__part_2_bounds[0].x) / 2
                let souffle_bottom_tray__part_2_y = souffle_bottom_tray__part_2_bounds[0].y + (souffle_bottom_tray__part_2_bounds[1].y - souffle_bottom_tray__part_2_bounds[0].y) / 2
                souffle_bottom_tray__part_2 = translate([-souffle_bottom_tray__part_2_x, -souffle_bottom_tray__part_2_y, 0], souffle_bottom_tray__part_2);
                souffle_bottom_tray__part_2 = rotate([0,0,0], souffle_bottom_tray__part_2);
                souffle_bottom_tray__part_2 = translate([souffle_bottom_tray__part_2_x, souffle_bottom_tray__part_2_y, 0], souffle_bottom_tray__part_2);

                souffle_bottom_tray__part_2 = translate([-75,0,0], souffle_bottom_tray__part_2);
                result = result.union(souffle_bottom_tray__part_2);
                
            

                // creating part 3 of case souffle_bottom_tray
                let souffle_bottom_tray__part_3 = _screws_extrude_1_outline_fn();

                // make sure that rotations are relative
                let souffle_bottom_tray__part_3_bounds = souffle_bottom_tray__part_3.getBounds();
                let souffle_bottom_tray__part_3_x = souffle_bottom_tray__part_3_bounds[0].x + (souffle_bottom_tray__part_3_bounds[1].x - souffle_bottom_tray__part_3_bounds[0].x) / 2
                let souffle_bottom_tray__part_3_y = souffle_bottom_tray__part_3_bounds[0].y + (souffle_bottom_tray__part_3_bounds[1].y - souffle_bottom_tray__part_3_bounds[0].y) / 2
                souffle_bottom_tray__part_3 = translate([-souffle_bottom_tray__part_3_x, -souffle_bottom_tray__part_3_y, 0], souffle_bottom_tray__part_3);
                souffle_bottom_tray__part_3 = rotate([0,0,0], souffle_bottom_tray__part_3);
                souffle_bottom_tray__part_3 = translate([souffle_bottom_tray__part_3_x, souffle_bottom_tray__part_3_y, 0], souffle_bottom_tray__part_3);

                souffle_bottom_tray__part_3 = translate([-75,0,0], souffle_bottom_tray__part_3);
                result = result.subtract(souffle_bottom_tray__part_3);
                
            
                    return result;
                }
            
            
        
            function main() {
                return souffle_bottom_tray_case_fn();
            }

        