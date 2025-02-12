function _bottom_case_walls_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[89.8000039,-112.2533745],[89.6300039,-39.2058745]]).appendPoint([89.6277879,-38.2536887]).appendArc([90.1277733,-37.7525251],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([127.1300132,-37.7515513]).appendArc([127.63,-37.2515513],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([127.63,-33.8775]).appendArc([128.13,-33.3775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([146.13,-33.3775]).appendArc([146.63,-32.8775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.63,-31.8025]).appendArc([147.13,-31.3025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.032,-31.3025]).appendArc([167.532,-31.8025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.532,-32.8775]).appendArc([168.032,-33.3775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([186.032,-33.3775]).appendArc([186.532,-33.8775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([186.532,-35.1734617]).appendArc([187.0318816,-35.6734617],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([204.1544875,-35.6775171]).appendPoint([204.2262735,-35.6846954]).appendPoint([225.8327494,-37.8452388]).appendArc([226.283,-38.3427576],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([226.283,-125.3068413]).appendPoint([213.7882948,-143.8293985]).appendArc([213.1598354,-144.0016976],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([178.6242238,-127.6512731]).appendArc([178.4505585,-127.6048109],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([163.6079077,-126.4049943]).appendArc([163.4681978,-126.4133534],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.3456179,-129.8875]).appendPoint([125.1241714,-129.8875]).appendPoint([90.0874902,-113.3039831]).appendArc([89.8013999,-112.853214],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.8000039,-112.2533745]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[91.0000007,-112.2505818],[90.8300007,-39.2030818]]).appendPoint([90.8294175,-38.9525066]).appendPoint([128.3300132,-38.9515197]).appendArc([128.83,-38.4515197],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.83,-34.5775]).appendPoint([147.33,-34.5775]).appendArc([147.83,-34.0775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([147.83,-32.5025]).appendPoint([166.332,-32.5025]).appendPoint([166.332,-34.0775]).appendArc([166.832,-34.5775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([185.332,-34.5775]).appendPoint([185.332,-36.3731776]).appendArc([185.8318816,-36.8731776],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([204.0820592,-36.8775]).appendPoint([204.0944978,-36.877503]).appendPoint([204.1068747,-36.8787406]).appendPoint([225.083,-38.976252]).appendPoint([225.083,-124.9399382]).appendPoint([213.1297817,-142.6597775]).appendPoint([178.9394991,-126.4728445]).appendArc([178.7658338,-126.4263823],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([163.535525,-125.195229]).appendArc([163.3958151,-125.2035881],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.2251065,-128.6875]).appendPoint([125.3938227,-128.6875]).appendPoint([91.000368,-112.4084343]).appendPoint([91.0000007,-112.2505818]).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
}


function _mcu_wall_cutout_extrude_2_2_outline_fn(){
    return new CSG.Path2D([[210.779,-84.2625],[218.779,-84.2625]]).appendPoint([218.779,-41.3625]).appendPoint([210.779,-41.3625]).appendPoint([210.779,-84.2625]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.2] });
}


function _bottom_case_outer_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[89.8000039,-112.2533745],[89.6300039,-39.2058745]]).appendPoint([89.6277879,-38.2536887]).appendArc([90.1277733,-37.7525251],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([127.1300132,-37.7515513]).appendArc([127.63,-37.2515513],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([127.63,-33.8775]).appendArc([128.13,-33.3775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([146.13,-33.3775]).appendArc([146.63,-32.8775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.63,-31.8025]).appendArc([147.13,-31.3025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.032,-31.3025]).appendArc([167.532,-31.8025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([167.532,-32.8775]).appendArc([168.032,-33.3775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([186.032,-33.3775]).appendArc([186.532,-33.8775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([186.532,-35.1734617]).appendArc([187.0318816,-35.6734617],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([204.1544875,-35.6775171]).appendPoint([204.2262735,-35.6846954]).appendPoint([225.8327494,-37.8452388]).appendArc([226.283,-38.3427576],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([226.283,-125.3068413]).appendPoint([213.7882948,-143.8293985]).appendArc([213.1598354,-144.0016976],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([178.6242238,-127.6512731]).appendArc([178.4505585,-127.6048109],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([163.6079077,-126.4049943]).appendArc([163.4681978,-126.4133534],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.3456179,-129.8875]).appendPoint([125.1241714,-129.8875]).appendPoint([90.0874902,-113.3039831]).appendArc([89.8013999,-112.853214],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.8000039,-112.2533745]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _screws_extrude_1_outline_fn(){
    return CAG.circle({"center":[120.357,-111.365],"radius":1.1})
.union(
    CAG.circle({"center":[185.068,-86.8235],"radius":1.1})
).union(
    CAG.circle({"center":[185.068,-51.8235],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-91.25],"radius":1.1})
).union(
    CAG.circle({"center":[109.5,-56.25],"radius":1.1})
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

        