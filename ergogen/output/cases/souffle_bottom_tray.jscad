function _bottom_case_walls_extrude_6_6_outline_fn(){
    return new CSG.Path2D([[89.8000006,-112.2487097],[89.8650006,-39.2012097]]).appendPoint([89.8658451,-38.2520808]).appendArc([90.3658314,-37.7525257],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([126.3650135,-37.7515527]).appendArc([126.865,-37.2515527],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([126.865,-33.8775]).appendArc([127.365,-33.3775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([144.865,-33.3775]).appendArc([145.365,-32.8775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([145.365,-31.8025]).appendArc([145.865,-31.3025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.293,-31.3025]).appendArc([165.793,-31.8025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.793,-32.8775]).appendArc([166.293,-33.3775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([183.793,-33.3775]).appendArc([184.293,-33.8775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.293,-35.1734742]).appendArc([184.7928784,-35.6734742],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([202.2943354,-35.6777313]).appendArc([202.7942134,-36.1783699],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([202.7929988,-37.1293519]).appendPoint([202.7704924,-54.7518615]).appendArc([203.270492,-55.2525],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([222.518,-55.2525]).appendArc([223.018,-55.7525],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([223.018,-104.4801948]).appendArc([223.0570712,-104.6739592],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([227.7064699,-115.7339946]).appendArc([227.6796181,-116.1759065],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([211.6810259,-144.1617691]).appendArc([211.0308295,-144.3645012],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([176.2141442,-127.6758731]).appendArc([176.0405122,-127.6285611],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([161.7115652,-126.4065423]).appendArc([161.566809,-126.4153045],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([144.9498741,-129.8875]).appendPoint([124.2162419,-129.8875]).appendPoint([90.0808745,-113.2939186]).appendArc([89.7994711,-112.8437898],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.8000006,-112.2487097]).close().innerToCAG()
.subtract(
    new CSG.Path2D([[91.0000001,-112.2497775],[91.0650001,-39.2022775]]).appendPoint([91.0652224,-38.9525068]).appendPoint([127.5650135,-38.9515203]).appendArc([128.065,-38.4515203],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([128.065,-34.5775]).appendPoint([146.065,-34.5775]).appendArc([146.565,-34.0775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([146.565,-32.5025]).appendPoint([164.593,-32.5025]).appendPoint([164.593,-34.0775]).appendArc([165.093,-34.5775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([183.093,-34.5775]).appendPoint([183.093,-36.3731824]).appendArc([183.5928784,-36.8731824],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([201.5933194,-36.8775609]).appendPoint([201.5929998,-37.1278193]).appendPoint([201.5689589,-55.9518615]).appendArc([202.0689585,-56.4525],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([221.818,-56.4525]).appendPoint([221.818,-104.7221664]).appendArc([221.8570712,-104.9159308],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([226.4663003,-115.8804103]).appendPoint([210.9623795,-143.0009589]).appendPoint([176.5348593,-126.4988688]).appendArc([176.3612273,-126.4515568],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([161.6382863,-125.1959369]).appendArc([161.4935301,-125.2046991],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([144.8258404,-128.6875]).appendPoint([124.4924555,-128.6875]).appendPoint([90.9998608,-112.4063776]).appendPoint([91.0000001,-112.2497775]).close().innerToCAG()
).extrude({ offset: [0, 0, 6.6] });
}


function _mcu_wall_cutout_extrude_2_2_outline_fn(){
    return new CSG.Path2D([[208.279,-84.2625],[216.279,-84.2625]]).appendPoint([216.279,-41.3625]).appendPoint([208.279,-41.3625]).appendPoint([208.279,-84.2625]).close().innerToCAG()
.extrude({ offset: [0, 0, 2.2] });
}


function _bottom_case_outer_outline_extrude_1_outline_fn(){
    return new CSG.Path2D([[89.8000006,-112.2487097],[89.8650006,-39.2012097]]).appendPoint([89.8658451,-38.2520808]).appendArc([90.3658314,-37.7525257],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([126.3650135,-37.7515527]).appendArc([126.865,-37.2515527],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([126.865,-33.8775]).appendArc([127.365,-33.3775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([144.865,-33.3775]).appendArc([145.365,-32.8775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([145.365,-31.8025]).appendArc([145.865,-31.3025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.293,-31.3025]).appendArc([165.793,-31.8025],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([165.793,-32.8775]).appendArc([166.293,-33.3775],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([183.793,-33.3775]).appendArc([184.293,-33.8775],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([184.293,-35.1734742]).appendArc([184.7928784,-35.6734742],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([202.2943354,-35.6777313]).appendArc([202.7942134,-36.1783699],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([202.7929988,-37.1293519]).appendPoint([202.7704924,-54.7518615]).appendArc([203.270492,-55.2525],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([222.518,-55.2525]).appendArc([223.018,-55.7525],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([223.018,-104.4801948]).appendArc([223.0570712,-104.6739592],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([227.7064699,-115.7339946]).appendArc([227.6796181,-116.1759065],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([211.6810259,-144.1617691]).appendArc([211.0308295,-144.3645012],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([176.2141442,-127.6758731]).appendArc([176.0405122,-127.6285611],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([161.7115652,-126.4065423]).appendArc([161.566809,-126.4153045],{"radius":0.5,"clockwise":false,"large":false}).appendPoint([144.9498741,-129.8875]).appendPoint([124.2162419,-129.8875]).appendPoint([90.0808745,-113.2939186]).appendArc([89.7994711,-112.8437898],{"radius":0.5,"clockwise":true,"large":false}).appendPoint([89.8000006,-112.2487097]).close().innerToCAG()
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

        