function _bottom_case_walls_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[89.867,-91.012556],[89.865,-39.202556]]).appendPoint([89.8649633,-38.252545]).appendArc([90.3649498,-37.7525257],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([126.3650135,-37.7515527]).appendArc([126.865,-37.2515527],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([126.865,-33.8775]).appendArc([127.365,-33.3775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([144.865,-33.3775]).appendArc([145.365,-32.8775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([145.365,-31.8025]).appendArc([145.865,-31.3025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.293,-31.3025]).appendArc([165.793,-31.8025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.793,-32.8775]).appendArc([166.293,-33.3775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([183.793,-33.3775]).appendArc([184.293,-33.8775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.293,-35.1734742]).appendArc([184.7928784,-35.6734742],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([202.3046335,-35.6777338]).appendArc([202.8044756,-36.1837575],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([202.7928948,-37.1449686]).appendPoint([202.7916718,-37.2464763]).appendArc([203.2916355,-37.7525],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([222.518,-37.7525]).appendArc([223.018,-38.2525],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([223.018,-95.8135]).appendArc([222.518,-96.3135],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([221.3628094,-96.3135]).appendPoint([172.4915977,-127.6379361]).appendArc([171.7388698,-127.0873949],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([172.3748288,-124.7174852]).appendPoint([175.7637049,-112.0700275]).appendArc([175.126741,-111.4649251],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([122.6430229,-128.4560266]).appendArc([122.0593945,-127.7245597],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([142.6065249,-93.211248]).appendArc([142.1768286,-92.455474],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.3671057,-92.4626312]).appendArc([89.8670367,-91.9626505],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.867,-91.012556]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[91.067,-91.0125097],[91.065,-39.2025097]]).appendPoint([91.0649903,-38.9525068]).appendPoint([127.5650135,-38.9515203]).appendArc([128.065,-38.4515203],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.065,-34.5775]).appendPoint([146.065,-34.5775]).appendArc([146.565,-34.0775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.565,-32.5025]).appendPoint([164.593,-32.5025]).appendPoint([164.593,-34.0775]).appendArc([165.093,-34.5775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([183.093,-34.5775]).appendPoint([183.093,-36.3731824]).appendArc([183.5928784,-36.8731824],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([201.5960294,-36.8775615]).appendPoint([201.5929819,-37.1305118]).appendPoint([201.5771269,-38.4464763]).appendArc([202.0770906,-38.9525],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([221.818,-38.9525]).appendPoint([221.818,-95.1135]).appendPoint([221.1577289,-95.1135]).appendArc([220.8879158,-95.1925477],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([173.3668692,-125.6515836]).appendPoint([177.4941112,-110.2485069]).appendArc([176.8571473,-109.6434045],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([124.0407954,-126.742193]).appendPoint([144.7176648,-92.0109563]).appendArc([144.2879685,-91.2551823],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([91.0670097,-91.2625345]).appendPoint([91.067,-91.0125097]).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
}


function _mcu_wall_cutout_extrude_2_2_outline_fn(){
    return new CSG.Path2D([[208.279,-66.7625],[216.279,-66.7625]]).appendPoint([216.279,-23.8625]).appendPoint([208.279,-23.8625]).appendPoint([208.279,-66.7625]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.2] });
}


function _bottom_case_outer_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[89.867,-91.012556],[89.865,-39.202556]]).appendPoint([89.8649633,-38.252545]).appendArc([90.3649498,-37.7525257],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([126.3650135,-37.7515527]).appendArc([126.865,-37.2515527],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([126.865,-33.8775]).appendArc([127.365,-33.3775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([144.865,-33.3775]).appendArc([145.365,-32.8775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([145.365,-31.8025]).appendArc([145.865,-31.3025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.293,-31.3025]).appendArc([165.793,-31.8025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.793,-32.8775]).appendArc([166.293,-33.3775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([183.793,-33.3775]).appendArc([184.293,-33.8775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.293,-35.1734742]).appendArc([184.7928784,-35.6734742],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([202.3046335,-35.6777338]).appendArc([202.8044756,-36.1837575],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([202.7928948,-37.1449686]).appendPoint([202.7916718,-37.2464763]).appendArc([203.2916355,-37.7525],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([222.518,-37.7525]).appendArc([223.018,-38.2525],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([223.018,-95.8135]).appendArc([222.518,-96.3135],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([221.3628094,-96.3135]).appendPoint([172.4915977,-127.6379361]).appendArc([171.7388698,-127.0873949],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([172.3748288,-124.7174852]).appendPoint([175.7637049,-112.0700275]).appendArc([175.126741,-111.4649251],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([122.6430229,-128.4560266]).appendArc([122.0593945,-127.7245597],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([142.6065249,-93.211248]).appendArc([142.1768286,-92.455474],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([90.3671057,-92.4626312]).appendArc([89.8670367,-91.9626505],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.867,-91.012556]).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}


function _screws_extrude_1_outline_fn(){
    return CAG.circle({"center":[191.871694,-109.4866677],"radius":1.1})
.union(
    CAG.circle({"center":[119.707,-111.365],"radius":1.1})
).union(
    CAG.circle({"center":[183.218,-52.9235],"radius":1.1})
).union(
    CAG.circle({"center":[109.25,-73.75],"radius":1.1})
).union(
    CAG.circle({"center":[109.25,-56.25],"radius":1.1})
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

        